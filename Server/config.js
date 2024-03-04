import mongoose from "mongoose";
const connentTOdb=async()=>{
   try {
      await mongoose.connect("mongodb+srv://gotam1875:123456%40@cluster0.e4n8hy1.mongodb.net/");
   console.table("Server online");
   } catch (error) {
      console.log(error)
   }
}
export default connentTOdb;