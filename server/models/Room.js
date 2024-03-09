const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    type:{
        type : String,
        enum : ["Regular" , "Master"]
    },
    layoutMainImageCloudinary : {
        type : String,
        required : true
    },
    layoutSubImagesCloudinary : {
        type : [String],
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model("Room" , schema)

