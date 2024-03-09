const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    type:{
        type : String,
        enum : ["Regular" , "Master"]
    },
    roomNo:{
        type : Number,
        required:true,
    },
    layoutMainImageCloudinary : {
        type : String,
        required : true
    },
    mainInfo : [{
        date :{
            type : Date,
            default : Date.now
        },

            living_room : {
                img : String,
                telephone_working : Number,
                coffee_maker : Number,
                fridge : Number,
                water : Number,
                menu_card : Number
            },
            washroom : {
                img : String,
                towels : Number,
                soap : Number,
                hair_dryer : Number,
                hot_water : Number,
                flush : Number
            },
            bedroom : {
                img : String,
                pillow : Number,
                bedsheets : Number
            },
            dining_room : {
                plates : Number,
                glasses : Number,
                napkin : Number
            }

    }]

},{
    timestamps : true
})

module.exports = mongoose.model("Room" , schema)

