import User from "../Models/login.js";
import Product from "../Models/Product.js"; // your Product model

export const Productcreate = async (req, res) => {
    try {
        const { userid, title, price, image, category, description } = req.body;
        if (!userid) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const productData = {
            userinfo: req.user._id, 
            title,
            price,
            category,
            description,
        };
        console.log(req.file,'files')

        // if image is uploaded
        if (req.file) {
            productData.image = {
                data: req.file.buffer,
                filename: req.file.originalname,
                contentType: req.file.mimetype,
            };
        }

        const product = await Product.create(productData);

        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
