const express=require('express')
const app=express()
require('dotenv').config()
const {connection}=require('./db')
const { Bookrouter } = require('./Routes/BookRoutes')
const { UserRouter } = require('./Routes/UserRoutes')

app.use(express.json())
app.use('/',UserRouter)
app.use('/books',Bookrouter)







app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log('Connected to DB success!!!')
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running at ${process.env.port}`)
})