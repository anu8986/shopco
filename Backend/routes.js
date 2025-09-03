import express from "express"
import { signupcontroller } from "./Controller/Usercontroller.js"

const routes = express.Router()

routes.post("/user/signup", signupcontroller)

export default routes