import bcrypt from "bcrypt"
import { Jsontoken } from "../Utils/Jwt.js"
import user from "../Models/login.js"

export const signupcontroller = async (req, res) => {
    try {
        const { Name, Email, ContactNumber, Password, ConfrimPassword } = req.body
        if (!Name) {
            return res.json({ message: "User Name is required" })
        }
        if (!Email) {
            return res.json({ message: "User Email is required" })
        }
        if (!ContactNumber) {
            return res.json({ message: "User Contact Number is required" })
        }
        if (!Password) {
            return res.json({ message: "User Password is required" })
        }
        if (Password.length < 8) {
            return res.json({ message: "Password must greathan 8 element" })
        }
        if (Password !== ConfrimPassword) {
            return res.json({ message: "ConfrimPassword doesnot match" })
        }

        const hashpassword = await bcrypt.hash(ConfrimPassword, 10)
        console.log(hashpassword, 'hashpasswords')

        const Newuser = new user({
            Name,
            Email,
            ContactNumber,
            Password: hashpassword
        })

        await Newuser.save()

        res.status(201).json({
            message: "user us created successfully",
            data: {
                Name: Newuser.Name,
                Email: Newuser.Email,
                ContactNumber: Newuser.ContactNumber,
                _id: Newuser._id,
                createAt: Newuser.createdAt,
                updatedAt: Newuser.updatedAt
            }
        })

        Jsontoken(Newuser._id, res)


        console.log(Newuser, 'new user is created ')
    } catch (error) {
        console.log(error.message, "from the usercontroller")
        res.status(500).json({ message: "Internel Error " })
    }
}


