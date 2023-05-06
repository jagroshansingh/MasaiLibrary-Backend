const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:Boolean
})

const UserModel=mongoose.model('user',userSchema)

module.exports={UserModel}



// {
//     "name": "abc123",
//     "email": "abc123@gmail.com",
//     "password": "abc123",
//     "isAdmin": false
// }