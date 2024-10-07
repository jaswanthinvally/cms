const express = require('express')
const { UserModel } = require('../Models/UserModels')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const app = express()
const UserRouter = express.Router()


app.use(express.json())

UserRouter.route("/user/signup").post(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please enter the required data"
        })
    }

    try {
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = await UserModel.create({
            name,
            email,
            password: hashedpassword
        })

        res.status(201).send(`Welcome ${name}`)
    } catch (err) {
        res.status(500).json({
            message: "User creation failed",
            error: err.message
        })
    }
})

UserRouter.route("/user/signin").post(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter email and password" })
    }

    try {
        const user = await UserModel.findOne({
             email : email, 
             password : password
            })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        else{
            const token = jsonwebtoken.sign({
                id : user._id
            })
            res.json({
                token : token
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" })
        }

        const token = jsonwebtoken.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' })

        res.status(200).json({
            message: "Login successful",
            token
        })
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
})

UserRouter.route("/user/courses").get((req, res) => 
    res.json({
        message: "Course endpoint"
    })
)

module.exports = UserRouter
