import express from "express";
import connentTOdb from "./config/config.js";
import cors from "cors";
import Auth from "./Routes/Auth.js"
import Products from "./Routes/Product.js"



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

  app.listen(5000, () => console.log("Server started"));
} catch (error) {
  console.log(error);
}
