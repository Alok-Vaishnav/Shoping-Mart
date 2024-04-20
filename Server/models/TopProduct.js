import mongoose from "mongoose";

const TopProductSchema = new mongoose.Schema({
    id: {
        type:String,
        require:true,
        unique:true
    },

    title: String,
    description: String,
    price: String,
    discountPercentage: String,
    rating: String,
    stock: String,
    brand: String,
    category: String,
    thumbnail: String,
    images:Array
});
export default  mongoose.model("topproducts", TopProductSchema);