import express from "express";
import { loginUser, signupUser } from "../controller/Auth.js";

const router = express.Router();

try {
    router.post("/login", loginUser);
    router.post("/signup", signupUser);

} catch (error) {
    console.log("Internal server error at auth route 🔴 ", error);
}

export default router;
