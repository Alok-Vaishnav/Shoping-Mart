import mongoose from "mongoose";
const connentTOdb=async()=>{
   try {
      await mongoose.connect("mongodb+srv://gotam1875:123456%40@cluster0.e4n8hy1.mongodb.net/");
   console.log("Connected to database 🤠🫡");
   } catch (error) {
      console.log("⚠️ Error accured while connecting to database : ",error)
   }
}
export default connentTOdb;