import express from "express";
import { loginUser, signupUser, saveAddress } from "../controller/Auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/address", saveAddress);

export default router;
