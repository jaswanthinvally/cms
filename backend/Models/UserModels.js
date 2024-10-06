const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema ({ 
    name : String,
    email: String,
    password: String
})

const AdminSchema = new mongoose.Schema(
    {
        name : String,
        email: String,
        password: String
    }
)

const CourseSchema  = new mongoose.Schema({
    name : String,
    description : String,
    price : String,
    imageurl : String,
    createrid : mongoose.Types.ObjectId
})

const PurchaseSchema = new mongoose.Schema({
    userid : mongoose.Types.ObjectId,
    courseid : mongoose.Types.ObjectId
})


const UserModel = mongoose.model("UserModel",UserSchema)
const AdminModel = mongoose.model("AdminModel",AdminSchema)
const CourseModel = mongoose.model("CourseModel",CourseSchema)
const PurchaseModle = mongoose.model("PurchasModel",PurchaseSchema)


module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModle
}