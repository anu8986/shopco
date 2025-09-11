import jwt from "jsonwebtoken";

export const Jsontoken = (userId) => {
    console.log(userId, 'userid')
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    console.log(token, 'usertoken')
    return token;
};


export const vertifytoken = async (req, res, next) => {
    const authheader = req.headers["authorization"];
    if (!authheader) return res.status(401).json({ message: "token not founded " })

    const token = authheader.split(" ")[1]
    console.log(token, 'tokenvertifying')

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized Token found " })
        req.user = decoded
        next()
    })
}

