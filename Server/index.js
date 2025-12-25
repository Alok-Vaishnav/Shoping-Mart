import express from "express";
import connentTOdb from "./config/config.js";
import cors from "cors";
import dotenv from "dotenv";
import Auth from "./Routes/Auth.js"
import Products from "./Routes/Product.js"

dotenv.config();
const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const app = express();

    app.use(express.json());
    // Configure CORS: allow specific origins if ALLOWED_ORIGINS is set, else allow all
    const allowed = process.env.ALLOWED_ORIGINS?.split(",").map(s => s.trim()).filter(Boolean);
    if (allowed && allowed.length > 0) {
      app.use(cors({
        origin: (origin, callback) => {
          if (!origin) return callback(null, true); // allow same-origin or curl
          if (allowed.includes(origin)) return callback(null, true);
          return callback(new Error("Not allowed by CORS"));
        }
      }));
      console.log("CORS restricted to:", allowed);
    } else {
      app.use(cors());
      console.log("CORS open: no ALLOWED_ORIGINS set");
    }
    
    // Connect to database (skip only when SKIP_DB=true)
    if (process.env.SKIP_DB === 'true') {
      console.log('Skipping DB connect because SKIP_DB=true');
    } else {
      await connentTOdb();
    }

    // Routes
    app.use("/auth", Auth); 
    app.use("/products", Products);

    // Health check
    app.get("/", (req, res) => {
      res.send("Server is healthy ✅");
    });

    // 404 handler
    app.use("*", (req, res) => {
      res.status(404).json({ 
        success: false, 
        message: "Route not found" 
      });
    });

    // Start server
    app.listen(port, () => {
      console.log(`✅ Server started on port ${port}`);
    });

  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

startServer();
