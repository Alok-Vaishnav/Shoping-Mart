// Product controller - fetch products from external free API (fakestoreapi.com)

// Note: This replaces DB queries with calls to a public free products API
// and maps the responses to the shape expected by the client.

const EXTERNAL_API_BASE = 'https://fakestoreapi.com';

const mapExternalProduct = (p) => ({
  id: p.id,
  _id: p.id,
  title: p.title,
  price: p.price,
  description: p.description,
  category: p.category,
  thumbnail: p.image || p.thumbnail || null,
  rating: p.rating && (p.rating.rate || p.rating) ? (p.rating.rate || p.rating) : null,
  rawRating: p.rating || null,
});

export const AllProducts = async (req, res) => {
  try {
    const response = await fetch(`${EXTERNAL_API_BASE}/products`);
    if (!response.ok) return res.status(502).json({ error: 'External API error' });
    const external = await response.json();
    const list = Array.isArray(external) ? external.map(mapExternalProduct) : [];
    if (list.length === 0) return res.send([]);
    return res.send(list);
  } catch (error) {
    console.error('Error fetching products from external API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const TopProducts = async (req, res) => {
  try {
    const response = await fetch(`${EXTERNAL_API_BASE}/products`);
    if (!response.ok) return res.status(502).json({ error: 'External API error' });
    const external = await response.json();
    const list = Array.isArray(external) ? external.map(mapExternalProduct) : [];
    // sort by rating (descending) and take top 6
    const top = list
      .filter((p) => typeof p.rating === 'number')
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
    if (top.length === 0) return res.send([]);
    return res.send(top);
  } catch (error) {
    console.error('Error fetching top products from external API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const Search = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await fetch(`${EXTERNAL_API_BASE}/products`);
    if (!response.ok) return res.status(502).json({ error: 'External API error' });
    const external = await response.json();
    const list = Array.isArray(external) ? external.map(mapExternalProduct) : [];
    if (!query || query.trim() === '') return res.send(list);
    const q = query.trim().toLowerCase();
    const filtered = list.filter((p) => {
      return (
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    });
    if (filtered.length === 0) return res.send([]);
    return res.send(filtered);
  } catch (error) {
    console.error('Error searching products from external API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
