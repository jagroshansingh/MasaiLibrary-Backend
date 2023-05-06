const express=require('express')
const Bookrouter=express.Router()
const {BookModel}=require('../Modals/BookModel')
var jwt=require('jsonwebtoken')

Bookrouter.get('/',async(req,res)=>{
    console.log(req.query)
    try {
        let ans;
        if(req.query.category && req.query.author) ans=await BookModel.find({category:req.query.category,author:req.query.author})
        else if(req.query.category) ans=await BookModel.find({category:req.query.category})
        else if(req.query.author) ans=await BookModel.find({author:req.query.author})
        else ans=await BookModel.find()
        res.send(ans)
    } catch (error) {
        console.log(error)
    }
})


Bookrouter.post('/',(req,res)=>{
    try {
        jwt.verify(req.headers.token,'admin',async(err,decoded)=>{
            if(decoded)
            {
                let ans=await BookModel.insertMany(req.body)
                res.send('Book Added')
            }
            else res.send('Not Authorised')

        })
        
    } catch (error) {
        console.log(error)
    }
})

Bookrouter.get('/:id',async(req,res)=>{
    try {
        let ans=await BookModel.findById(req.params.id)
        res.send(ans)
    } catch (error) {
        console.log(error)
        res.send('Not found')
    }
})

Bookrouter.put('/:id',(req,res)=>{  
    try {
        jwt.verify(req.headers.token,'admin',async(err,decoded)=>{
            if(decoded)
            {
                await BookModel.findByIdAndUpdate({"_id":req.params.id},req.body)
                res.send('updated success')
            }
            else res.send('Not Authorised')

        })
        
    } catch (error) {
        console.log(error)
        res.send('Id not found')
    }
})

Bookrouter.delete('/:id',(req,res)=>{
    try {
        jwt.verify(req.headers.token,'admin',async(err,decoded)=>{
            if(decoded)
            {
                await BookModel.findByIdAndDelete({"_id":req.params.id})
                res.send('deleted success')
            }
            else res.send('Not Authorised')

        })
        
    } catch (error) {
        console.log(error)
        res.send('Id not found')
    }
})


module.exports={Bookrouter}