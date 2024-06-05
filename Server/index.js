import express from "express";
import connentTOdb from "./config/config.js";
import cors from "cors";
import dotenv from "dotenv";
import Auth from "./Routes/Auth.js"
import Products from "./Routes/Product.js"

dotenv.config();
const port = process.env.REACT_APP_SERVER_PORT;

try {
  const app = express();

  app.use(express.json());
  app.use(cors());
  await connentTOdb();

  //Router
  app.use("/auth", Auth); 
  app.use("/products", Products);




  app.get("/", (req, res) => {
    res.send("healthy");
  });

  app.listen(port, () => console.log("Server started" ,{port}));
    
} catch (error) {
  console.log(error);
}
