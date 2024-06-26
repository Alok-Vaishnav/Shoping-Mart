import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: String
},  
{timestamps:true}
);

export default  mongoose.model("User", UserSchema);