import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";
import { Connectdb } from "./Utils/Db.js";
import multer from "multer";
import http from "http"

dotenv.config();
const app = express();
const server = http.createServer(app)

// this allow the local host 5173 5174

// app.use(cors({
//     origin: "http://localhost:5173" || "http://localhost:5174",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storage = multer.memoryStorage();
export const upload = multer({ storage });

app.use("/app/auth", routes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await Connectdb();
        server.listen(PORT, () => {
            console.log(`✅ Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Server start failed:", err.message);
        process.exit(1); // for stopping the server when any errr is occures 
    }
};

startServer();
