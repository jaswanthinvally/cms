const express = require('express')
const app = express()
const { AdminModel } = require('../Models/UserModels')
const AdminRouter = express.Router()
const bcrypt  = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')



AdminRouter.route('/admin/signup').post(async (req,res) => {
    const {name,email,password} = req.body
    const hashedpassword = await bcrypt.hash(password,10)
    
    await AdminModel.create({
        name : name,
        email : email,
        password : hashedpassword

    })
    .then((result) => {
        res.json({
            message : "user creation sucessfull",
            status : result
        })
    })
    .catch((err) => res.json({
            message : "user creation failed",
            status : err
       
    }) )
})

AdminRouter.route("/admin/signin").post(async (req, res) => {
    const { email, password } = req.body;

    
    if (!email || !password) {
        return res.json({
            message: "Please enter the details",
        });
    }

    try {
        
        const user = await AdminModel.findOne({ email });

        if (!user) {
            return res.json({
                message: "User not found",
            });
        }    
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).json({message:"user not found"})
        }
        const token = await jsonwebtoken.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });    
        res.json({
            message: "Login successful",
            token,
        });
        
    } catch (error) {
        
        res.json({
            error: error.message,
        });
    }
});
module.exports = AdminRouter