import jwt from "jsonwebtoken";
import cookie from "cookie";


export const Jsontoken = (username, res) => {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.cookie("token", token, {
        httpOnly: true,  // can't be accessed by JavaScript
        sameSite: "strict", // protect against CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })
    return token
}

