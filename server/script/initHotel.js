const Hotel = require("../models/Hotel.js");
const Room = require("../models/Room.js");
const ErrorHandler = require("../utils/errorHandler.js");
const mongoose = require('mongoose');
const {config} =  require("dotenv");
config({
    path:"../data/config.env",
})


const fillHotel = async() => {

    const hotel = await Hotel.create({rooms : [process.env.numFloors][process.env.numRooms]});

    const masterRooms = await Room.find({type : "Master"});
    const regularRooms = await Room.find({type : "Regular"});
    const masterIds = masterRooms.map(room => room._id);
    const regularIds = regularRooms.map(room => room._id); 

    var mP,rP;
    mP = rP = 0;


    for(let i = 0 ; i < process.env.numFloors ; ++i){
        
        for(let j = 0 ; j < numRegs ; ++j){
            hotel.rooms[i].push(regularIds[rP]);
            ++rP;
        }

        for(let j = 0 ; j < numMasts ; ++j){
            hotel.rooms[i].push(masterIds[mP]);
            ++mP;
        }
    }
}


module.exports = {fillHotel};

