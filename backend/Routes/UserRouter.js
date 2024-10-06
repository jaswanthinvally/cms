const express = require('express')
const { UserModel } = require('../Models/UserModels')
const app = express()
const UserRouter = express.Router()



UserRouter.route("/user/signup").post((req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.json({
            message : "please enter the required data"
        })
    }

    else {
        const CreateUser = UserModel.create({
            name,
            email,
            password
        })
        CreateUser.then(() => res.send(`welcome ${name}`)).catch(() => res.send(" user creation failed"))
    }
    
})

UserRouter.route("/user/signin").post((req, res) =>
    res.json({
        message: "this is the signin route"
    }))

UserRouter.route("/user/courses").get((req, res) =>
    res.json(
        {
            message: "course end point"
        }
    ))


module.exports = UserRouter