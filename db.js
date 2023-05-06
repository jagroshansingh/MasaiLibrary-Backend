const mongoose=require('mongoose')

let connection=mongoose.connect(`mongodb+srv://jrsingh:jrsingh@cluster0.9rxsr.mongodb.net/MasaiLibrary?retryWrites=true&w=majority`)

module.exports={connection}