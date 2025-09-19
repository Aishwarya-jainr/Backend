const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerontroller = async(req,res)=>{
    try {
        let{name,email,mobile,password}=req.body;

        let checkExistingUser = await UserModel.finOne({email});

        if(checkExistingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        let hashedPass = await bcrypt.hash(password,10)

        let newUser = await UserModel.create({
            ame,
            email,
            mobile,
            password: hashedPass,
        })

        const token = jwt.sign({id: newUser._.id}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.cookie('ticket', token);

        return res.status(201).json({
            message: "User registered successfully",
            user:newUser,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error,
         });
    }
}

module.exports = {
    registerontroller,
}