import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    id: String,
    title: String,
    price: String,
});
export default  mongoose.model("Cart",CartSchema);