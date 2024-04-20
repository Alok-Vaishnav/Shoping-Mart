
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