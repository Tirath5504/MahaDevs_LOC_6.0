const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique : true,
    },
    password:{
        type : String,
        required:true,
    },
    isAdmin :{
        type : Boolean,
        required : true,
    },
    roomsUnder : {
        type : [Number],
    }

},{
    timestamps : true
})

module.exports = mongoose.model("User" , schema)

