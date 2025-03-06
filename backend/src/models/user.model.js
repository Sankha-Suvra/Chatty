import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:[true, "Email is required"],
            unique: true,
            lowercase: true
        },
        fullName:{
            type: String,
            required: true,
            minlength: [3, "Full name must be at least 3 characters long"],
        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        profilePic:{
            type: String,
            default: ""
        }
    },{timestamps: true}
)

const User = mongoose.model("User",userSchema)

export default User