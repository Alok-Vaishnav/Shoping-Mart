import express from "express";
import { TopProducts } from "../controller/Product.js";

const router = express.Router();

try {
    router.get("/topproducts", TopProducts );

} catch (error) {
    console.log("Internal server error at Product route 🔴 ", error);
}

export default router;
