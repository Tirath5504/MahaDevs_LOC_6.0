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
    staffID : {
        type : String,
        required : true
    },
    auth : {
        type : String,
        enum : ['Staff' , 'Admin'],
        required : true
    },
    hotelUnder : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Hotel'
    }
},{
    timestamps : true
})

module.exports = mongoose.model("User" , schema)

