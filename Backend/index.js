import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes.js"
import { Connectdb } from "./Utils/Db.js"
dotenv.config()
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/app/auth", routes)
const PORT = process.env.PORT || 5000
console.log(PORT, 'port number is this ')

app.listen(PORT, () => {
    console.log(`server is running is http://localhost:${PORT}`)
    Connectdb()
})