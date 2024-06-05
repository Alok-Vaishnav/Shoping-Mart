import mongoose from "mongoose";
const connentTOdb=async()=>{
   try {
      await mongoose.connect(process.env.DATABASE_URL);
   console.log("Connected to database 🤠🫡");
   } catch (error) {
      console.log("⚠️ Error accured while connecting to database : ",error)
   }
}
export default connentTOdb;