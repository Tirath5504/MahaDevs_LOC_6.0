const Room = require("../models/Room.js")
const ErrorHandler = require("../utils/errorHandler.js");

const pushSubImage = async(req, res , next)=>{
    try{

    const secureURL = req.secureURL;

    const room = await Room.findOne({roomNo : req.params.roomId});

    const whichPart = req.part;

    room.mainInfo[room.mainInfo.length - 1].divisions.whichPart.img = secureURL;
    
    res.status(200).json({
       success : "true",
    })

}
catch(err){
  return next(new ErrorHandler(err.message , 400));
}
};

const getRoomData = async(req , res , next)=>{
    
    try{

    const index = req.params.index;

    const room = await Room.findOne({roomNo : index});

    res.status(200).json({
        success : "true",
        room
    })
}
catch(err){
    return next(new ErrorHandler(err.message , 400));
}
}

const getFloorStatus = async(req , res , next)=>{
    try{
        const floorNo = req.params.floorNo;

        const res = [];

        const key = 100 * floorNo;

        for(let i = 0 ; i < 5 ; ++i){
            const room = await Room.findOne({roomNo : key + i});

            const dateOfLast = room.mainInfo[room.mainInfo.length - 1].date;

            res.push(Date.now() - dateOfLast <= 24 * 60 * 60 * 1000 ? 1 : 0);
        }

        res.status(200).json({
            success : "true",
            res
        })

    }

    catch(err){
        return next(new ErrorHandler(err.message , 400));
    }
}

module.exports = {pushSubImage , createRoom , getRoomData , getFloorStatus};
