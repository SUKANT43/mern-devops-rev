const bcrypt = require('bcryptjs');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');



const generateJwt = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }

        const checkMail = await User.findOne({ email });
        if (checkMail) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        return res.status(200).json({ msg: "User registered successfully" });

    } catch (e) {
            return res.status(400).json({ msg: "Please enter all fields" });
    }


};

const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body
        if(!email||!password){
            return res.status(400).json({ msg: "Please enter all fields" });
        }
        const checkMail=await User.findOne({email});
        if(!checkMail){
            return res.status(400).json({msg:"register your account"})
        }
        const compPassword=await bcrypt.compare(password,checkMail.password)
        if(!compPassword){
            return res.status(400).json({msg:"enter password is incorrect try again"})
        }
        return res.status(200).json({
            name:checkMail.name,
            email:checkMail.email,
            token:generateJwt(checkMail._id)
        })
    }
    catch(e){
        return res.status(500).json({msg:e.message})
    }
}

const me=(req,res)=>{
    res.status(200).json({
        name:req.user.name
    })
}


module.exports = generateJwt;



module.exports = { registerUser,loginUser ,me};
