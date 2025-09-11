import bcrypt from "bcrypt"
import { Jsontoken } from "../Utils/Jwt.js"
import User from "../Models/login.js"

export const signupcontroller = async (req, res) => {
    try {
        const { Name, Email, ContactNumber, Password, ConfirmPassword } = req.body

        if (!Name) return res.status(400).json({ message: "User Name is required" })
        if (!Email) return res.status(400).json({ message: "User Email is required" })
        if (!ContactNumber) return res.status(400).json({ message: "User Contact Number is required" })
        if (!Password) return res.status(400).json({ message: "User Password is required" })
        if (Password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" })
        if (Password !== ConfirmPassword) return res.status(400).json({ message: "Confirm Password does not match" })

        const existingUser = await User.findOne({ Email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" })
        }

        const hashpassword = await bcrypt.hash(Password, 10)

        const Newuser = new User({
            Name,
            Email,
            ContactNumber,
            Password: hashpassword
        })

        await Newuser.save()
        console.log(Newuser, 'User created successfully')



        res.status(201).json({
            message: "User created successfully",
            data: {
                Name: Newuser.Name,
                Email: Newuser.Email,
                ContactNumber: Newuser.ContactNumber,
                _id: Newuser._id,
                createdAt: Newuser.createdAt,
                updatedAt: Newuser.updatedAt
            }
        })

    } catch (error) {
        console.log(error.message, "usercontroller")
        console.log(error.stack, "usercontroller1")

        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const Loginusercontroller = async (req, res) => {
    try {
        const { Email, Password } = req.body
        if (!Email) return res.status(404).json({ message: "Email is not Provided" })
        if (!Password) return res.status(404).json({ message: "Password is not Provided" })
        const user = await User.findOne({ Email: Email })

        console.log(user, 'users')
        if (!user) return res.status(401).json({ message: "Email is not vaild" })
        const vertifypasswords = await bcrypt.compare(Password, user.Password)
        console.log(vertifypasswords, 'vertifyedpassowrds')
        if (!vertifypasswords) return res.status(401).json({ message: "Invaild passowrd provided" })
        const token = Jsontoken(user._id)
    console.log(token,'token from controller')

        res.status(201).json(
            {
                message: "successfully logined ",
                data: {
                    Name: user.Name,
                    Email: user.Email,
                    ContactNumber: user.ContactNumber,
                    token: token,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    _id: user._id
                }

            })

    } catch (error) {
        console.log(error.stack, 'logincontroller')
        console.log(error.message, 'logincontroller1')

    }
}
