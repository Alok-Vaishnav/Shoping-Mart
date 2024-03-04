import express from "express";
import connentTOdb from './config.js';
import User from "./Schema/User.js";
import Product from "./Schema/Product.js";
import Cart from "./Schema/Cart.js";
import cors from 'cors'

try {
    const app = express();

    app.use(express.json());
    app.use(cors())
    await connentTOdb();

    //Signup:

    app.post("/signup", async (req, res) => {
        console.log(req.body)
        const { firstname, lastname, email, password } = req.body
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        } else {
            let newuser = await User({ firstname, lastname, email, password })
            await newuser.save();
            console.log(newuser)
            return res.json(newuser)
        }
    });

    //login

    app.post("/login", async (req, res) => {
        const { email, password } = req.body
        let user = await User.findOne({ email });
        if (user) {
            const mypassword = user.password === password
            if (mypassword) {
                return res.status(200).json({ user, status: true })
            }
            else {
                return res.status(400).json({ message: "wrong password", status: false })
            }
        }
        else {
            return res.status(404).json({ message: "usernot found", status: false })
        }

    });

    //Products
    // app.get("/Products", async (req, res) => {
    //     let Products = await Product.find();
    //     if (Products.length > 0) {
    //         console.log(Products)
    //         return res.send(Products)
    //     } else {
    //         res.send({ result: "Products not found" })
    //     }
    // });

    //Categories

    app.get("/Categories", async (req, res) => {
        const { category } = req.query
        try {
            if (category) {
                let Categories = await Product.find({ category });
                if (Categories) {
                    console.log(Categories)
                    return res.send(Categories)
                } else {
                    return res.send({ result: "Products not found" })
                }
            }
        } catch (error) {
            console.log(error)
        }

    });

    //Search
    // app.get("/Search", async (req, res) => {
    //     const { query } = req.query
    //     try {
    //         let Search = await Product.find(
    //             {
    //                 "$or": [
    //                     { name: { $regex: query, $options: 'i', } },
    //                     { brand: { $regex: query, $options: 'i', } },
    //                     { category: { $regex: query, $options: 'i', } },
    //                     { title: { $regex: query, $options: 'i', } }
    //                 ]
    //             }
    //         )
    //         if (Search.length > 0) {
    //             return res.send(Search);
    //         }
    //         else {
    //             return res.send({ result: "Product not found" })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // });

    //Cart API//

    // app.post("/Cart", async (req, res) => {
    //     const { id, title, price } = req.body
    //     let cart = await findOne({ id })
    //     let AddCart = await Cart({ id, title, price})
    //     await AddCart.save();
    //     console.log(AddCart)
    //     return res.json(AddCart)
    // });


    app.listen(5000);
} catch (error) {
    console.log(error)
}
