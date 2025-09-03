import mongoose, { Types } from "mongoose";

const Usermodel = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    ContactNumber: {
        type: Number,
        required: true,
    },
    Password: {
        type: String,
        required: [true, "Password is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
})

const user = mongoose.model("User", Usermodel)
export default user