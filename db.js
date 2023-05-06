const mongoose=require('mongoose')

let connection=mongoose.connect(process.env.mongo)

module.exports={connection}