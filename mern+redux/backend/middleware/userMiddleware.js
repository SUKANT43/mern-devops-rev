const jwt = require('jsonwebtoken');
const userData = require('../model/userModel');

const protect = async (req, res, next) => {
    let token;

    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userData.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(404).json({ msg: "User not found" });
            }

            next(); 
        } else {
            return res.status(401).json({ msg: "No token provided, authorization denied" });
        }
    } catch (e) {
        return res.status(401).json({ err: e.message });
    }
};

module.exports = { protect };
