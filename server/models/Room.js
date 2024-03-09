const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    type:{
        type : String,
        enum : ["Regular" , "Master"]
    },
    layoutImageCloudinary : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model("Room" , schema)

