const Room = require("../models/Room.js");
const ErrorHandler = require("../utils/errorHandler.js");
const mongoose = require('mongoose');
const {config} =  require("dotenv");
config({
    path:"../data/config.env",
})

const initializeRooms = async () => {

const data = [];

for(let i = 1 ; i <= 5 ; ++i){

    var roomNo = 100 * i;

    for(let j = 1 ; j <= 6 ; ++j){
        if(j < 4){
            data.push({

                    type : "Master",
                    roomNo: roomNo + j,
                    layoutMainImageCloudinary : process.env.DINING_ROOM_LAYOUT_LINK,

                    mainInfo : [{
                        date : Date.now(),
                
                            living_room : {
                                img : "",
                                telephone_working : 0,
                                coffee_maker : 0,
                                fridge : 0,
                                water : 0,
                                menu_card : 0
                            },
                            washroom : {
                                img : "",
                                towels : 0,
                                soap : 0,
                                hair_dryer : 0,
                                hot_water : 0,
                                flush : 0
                            },
                            bedroom : {
                                img : "",
                                pillow : 0,
                                bedsheets : 0
                            },
                            dining_room : {
                                plates : 0,
                                glasses : 0,
                                napkin : 0
                            }
                
                    }]
                
                
            })
        }

        else{
            data.push({
                
                type : "Regular",
                roomNo: roomNo + j,
                layoutMainImageCloudinary : process.env.NO_DINING_ROOM_LAYOUT_LINK,

                mainInfo : [{
                    date : Date.now(),
            
                        living_room : {
                            img : "",
                            telephone_working : 0,
                            coffee_maker : 0,
                            fridge : 0,
                            water : 0,
                            menu_card : 0
                        },
                        washroom : {
                            img : "",
                            towels : 0,
                            soap : 0,
                            hair_dryer : 0,
                            hot_water : 0,
                            flush : 0
                        },
                        bedroom : {
                            img : "",
                            pillow : 0,
                            bedsheets : 0
                        },
                        dining_room : {
                            plates : 0,
                            glasses : 0,
                            napkin : 0
                        }
            
                }]
            
            
            })
        }
    }
}

await Room.insertMany(data);

}

const dropRoom = async() => {
    await Room.deleteMany({});
}


module.exports = {initializeRooms , dropRoom}

