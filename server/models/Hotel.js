const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true,
        unique : true,
    },
    staffIDs : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'User',
        required : true
    },

    location : {
        type : "Point",
        coordinates : [Number , Number],
        required : true
    },

    numFloors : {
        type : Number,
        required : true
    },

    numRooms : {
        type : Number,
        required : true
    },

    rooms: [[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required : true
    }]]

},{
    timestamps : true
})

module.exports = mongoose.model("Hotel" , schema)

