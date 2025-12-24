import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
        minlength: [2, "Full name must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false
    },
    addresses: {
        type: [
            {
                line1: String,
                line2: String,
                city: String,
                state: String,
                pincode: String,
                country: String,
                createdAt: { type: Date, default: Date.now }
            }
        ],
        default: []
    }
}, {
    timestamps: true
});

export default mongoose.model("User", UserSchema);