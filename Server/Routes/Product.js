import express from "express";
import { AllProducts, Search, TopProducts } from "../controller/Product.js";

const router = express.Router();

try {
    router.get("/topproducts", TopProducts );
    router.get("/allProducts",AllProducts)
    router.get("/search",Search)

} catch (error) {
    console.log("Internal server error at Product route 🔴 ", error);
}

export default router;
