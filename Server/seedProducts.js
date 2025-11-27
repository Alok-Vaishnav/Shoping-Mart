import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ProductSchema from './models/Product.js';

dotenv.config();

// Sample products data
const sampleProducts = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    description: "The latest iPhone with amazing features",
    price: "999",
    discountPercentage: "10",
    rating: "4.8",
    stock: "50",
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1678652197048-869040e25e00?w=400",
    images: ["https://images.unsplash.com/photo-1678652197048-869040e25e00?w=400"]
  },
  {
    id: "2",
    title: "Samsung Galaxy S23",
    description: "Powerful Android smartphone",
    price: "899",
    discountPercentage: "15",
    rating: "4.7",
    stock: "75",
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400"]
  },
  {
    id: "3",
    title: "MacBook Pro 16",
    description: "Professional laptop for creators",
    price: "2499",
    discountPercentage: "5",
    rating: "4.9",
    stock: "30",
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"]
  },
  {
    id: "4",
    title: "Sony WH-1000XM5",
    description: "Premium noise-canceling headphones",
    price: "399",
    discountPercentage: "20",
    rating: "4.6",
    stock: "100",
    brand: "Sony",
    category: "audio",
    thumbnail: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400"]
  },
  {
    id: "5",
    title: "iPad Air",
    description: "Versatile tablet for work and play",
    price: "599",
    discountPercentage: "8",
    rating: "4.7",
    stock: "60",
    brand: "Apple",
    category: "tablets",
    thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"]
  },
  {
    id: "6",
    title: "Nike Air Max",
    description: "Comfortable running shoes",
    price: "129",
    discountPercentage: "25",
    rating: "4.5",
    stock: "200",
    brand: "Nike",
    category: "shoes",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"]
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await ProductSchema.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    await ProductSchema.insertMany(sampleProducts);
    console.log(`✅ Added ${sampleProducts.length} sample products`);

    console.log('\n📦 Sample Products Added:');
    sampleProducts.forEach(p => console.log(`  - ${p.title} ($${p.price})`));

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
