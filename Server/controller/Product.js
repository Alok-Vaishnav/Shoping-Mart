// AllProducts

import ProductSechema from "../models/Product.js"

export const AllProducts= async (req, res) => {
    
  try {
    const Allproducts = await ProductSechema.find();

    if (Allproducts.length > 0) {
      return res.send(Allproducts);
       
    } else {
      return res.send({ result: "Products not found" });
    }

  } catch (error) {
    console.log("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



// TopProducts

import TopProductSchema from "../models/TopProduct.js";

export const TopProducts= async (req, res) => {
    
  try {
    const Topproducts = await TopProductSchema.find();

    if (Topproducts.length > 0) {
      return res.send(Topproducts);
       
    } else {
      return res.send({ result: "Products not found" });
    }

  } catch (error) {
    console.log("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//Search

export const Search=async (req, res) => {
  const { query } = req.query;
  try {
    let Search = await ProductSechema.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    });
    if (Search.length > 0) {
      return res.send(Search);

    } else {
      
      return res.send({ result: "Product not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
