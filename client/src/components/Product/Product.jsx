import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { MyContext } from '../../Context/MyContext';

function Product() {
  const { IsmyProducts, notfound, setnotfound } = useContext(MyContext);
  const [myProducts, setMyProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

      const API_ENDPOINT = `${API_BASE_URL}/products/allProducts`;
      
      console.log('Fetching products from:', API_ENDPOINT);

      let response = await fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        let AllProducts = await response.json();
        console.log('Fetched products:', AllProducts); // Log response data
        // Ensure array
        const list = Array.isArray(AllProducts) ? AllProducts : [];
        setMyProducts(list);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setnotfound(true); // Set notfound to true if there is an error
    }
  }

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('myProducts state updated:', myProducts);
    console.log('IsmyProducts (search results):', IsmyProducts);
  }, [myProducts, IsmyProducts]);

  // Use search results if available, otherwise use all products
  const displayProducts = IsmyProducts.length > 0 ? IsmyProducts : myProducts;

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {IsmyProducts.length > 0 ? 'Search Results' : 'Our Products'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            {IsmyProducts.length > 0 ? `Found ${IsmyProducts.length} product(s)` : 'Discover our amazing collection'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {notfound ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <p className="text-lg text-gray-500">No products found</p>
              <p className="mt-2 text-sm text-gray-400">Try a different search term</p>
            </div>
          ) : displayProducts.length > 0 ? (
            displayProducts.map((product) => (
              <ProductCard
                key={product.id || product._id}
                thumbnail={product.thumbnail}
                description={product.description}
                rating={product.rating}
                price={product.price}
                title={product.title}
                id={product.id || product._id}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <p className="text-lg text-gray-500">No products found</p>
              <p className="mt-2 text-sm text-gray-400">Please check back later</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
