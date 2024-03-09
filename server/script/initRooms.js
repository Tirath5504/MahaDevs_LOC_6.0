const Room = require("../models/Room.js");
const ErrorHandler = require("../utils/errorHandler.js");
const mongoose = require('mongoose');
const {config} =  require("dotenv");
config({
    path:"../data/config.env",
})

const initializeRooms = async () => {

const data = [];
for(let i = 0 ; i < 10 ; ++i){
    data.push({
        type : "Master",
        layoutMainImageCloudinary : process.env.DINING_ROOM_LAYOUT_LINK
    });
}

for(let i = 0 ; i < 20 ; ++i){
    data.push({
        type : "Regular",
        layoutMainImageCloudinary : process.env.NO_DINING_ROOM_LAYOUT_LINK  
    });
}

await Room.insertMany(data);

}

const dropRoom = async() => {
    await Room.deleteMany({});
}


module.exports = {initializeRooms , dropRoom}

