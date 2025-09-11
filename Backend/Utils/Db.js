import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const mongodnurl = process.env.MONGODB_URL

export const Connectdb = async () => {
    try {
        const connect = await mongoose.connect(mongodnurl)
        console.log('✅ mongodb is connected sucessfully')
    } catch (error) {
        console.log(error.message, 'from mongodb ')
    }
}