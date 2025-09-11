import express from "express"
import { Loginusercontroller, signupcontroller } from "./Controller/Usercontroller.js"
import { vertifytoken } from "./Utils/Jwt.js"
import { Productcreate } from "./Controller/Productcontoller.js"

const routes = express.Router()

routes.post("/user/signup", signupcontroller)
routes.post("/user/login", Loginusercontroller)

//token is vertifyed every routes 
routes.use(vertifytoken)

routes.post("/user/product/create", Productcreate)


export default routes