const express=require('express')
const UserRouter=express.Router()
const {UserModel}=require('../Modals/UserModel')
var jwt=require('jsonwebtoken')

UserRouter.post('/register',async(req,res)=>{
    try {
        let found=await UserModel.find({email:req.body.email})
        if(found.length>0) res.send('Email already registered')
        else 
        {
            await UserModel.insertMany(req.body)
            res.send('Registered Success')
        }
    } catch (error) {
        console.log(error)
    }
})



UserRouter.post('/login',async(req,res)=>{
    try {
        let found=await UserModel.find({email:req.body.email,password:req.body.password})
        if(found.length!=1) res.send('Invalid Credentials')
        else 
        {
            if(found[0].isAdmin)
            {
                var token=jwt.sign({school:'masai'},'admin')
                res.send(token)
            }
            else
            {
                var token=jwt.sign({school:'masai'},'user')
                res.send(token)
            }
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports={UserRouter}