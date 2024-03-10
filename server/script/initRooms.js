const Room = require("../models/Room.js");
const ErrorHandler = require("../utils/errorHandler.js");
const mongoose = require('mongoose');
const { config } = require("dotenv");
config({
    path: "../data/config.env",
})
const img0 = 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg';
const img1 = 'https://res.cloudinary.com/dstefsngu/image/upload/v1709968014/NO_DINING.png';
const initializeRooms = async () => {

    const data = [];

    for (let i = 1; i <= 5; ++i) {

        var roomNo = 100 * i;

        for (let j = 1; j <= 6; ++j) {
            if (j < 4) {
                data.push({
                    type: "Master",
                    roomNo: roomNo + j,
                    layoutMainImageCloudinary: process.env.DINING_ROOM_LAYOUT_LINK,
                    mainInfo: []
                })
            }
            else {
                data.push({
                    type: "Regular",
                    roomNo: roomNo + j,
                    layoutMainImageCloudinary: process.env.NO_DINING_ROOM_LAYOUT_LINK,
                    mainInfo: []
                })
            }
        }
    }

    await Room.insertMany(data);

}

const dropRoom = async () => {
    await Room.deleteMany({});
}

const generateData = async () => {
    let myData = [];
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            const roomNo = 100 * i + j;
            const mainInfo = [];
            const link = (j < 4) ? img0 : img1;
            for (let k = 30; k > 1; k--) {
                let time = Date.now() - (k * 24 * 60 * 60 * 1000);
                mainInfo.push({
                    date: time,
                    livingRoom: {
                        img: link,
                        Telephone: Math.random() < 0.5,
                        'Coffee Maker': Math.random() < 0.5,
                        Fridge: Math.random() < 0.5,
                        Water: Math.random() < 0.5,
                        'Menu Card': Math.random() < 0.5,
                    },
                    dinningRoom: {
                        img: link,
                        Plates: Math.floor(Math.random() * 5) + 1,
                        Glasses: Math.floor(Math.random() * 5) + 1,
                        Napkin: Math.floor(Math.random() * 10) + 1,
                    },
                    washRoom: {
                        img: link,
                        Towels: Math.random() < 0.5,
                        Soap: Math.random() < 0.5,
                        'Hair Dryer': Math.random() < 0.5,
                        'Hot Water': Math.random() < 0.5,
                        Flush: Math.random() < 0.5,
                    },
                    bedRoom: {
                        img: link,
                        'Bed Sheets': Math.random() < 0.5,
                        Pillows: Math.floor(Math.random() * 2) + 1,
                    }
                })
            }
            myData.push({
                roomNo,
                type: (j < 4) ? "Master" : "Regular",
                layoutMainImageCloudinary: link,
                mainInfo
            })
        }
    }
    await Room.insertMany(myData);
}

module.exports = { initializeRooms, dropRoom, generateData }
/*
{
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
            
                }
*/

