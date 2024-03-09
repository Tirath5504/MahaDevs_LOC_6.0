const Room = require("../models/Room.js")
const ErrorHandler = require("../utils/errorHandler.js");

const pushDetails = async(req, res , next)=>{

    try{

    const details = req.body;

    const room = await Room.findOne({roomNo : details.roomNo});

    const dateOfInput = details.date;

    if(dateOfInput - room.mainInfo[room.mainInfo.length - 1].date <= 24 * 60 * 60 * 1000){
        for(let key in details){
        if(key == "roomNo" || key == "date") continue;
        room.mainInfo[room.mainInfo.length - 1].key = details.key;
        }
    }

    else{

        const toPush = {
            date : dateOfInput
        }

        for(let key in details){
            if(key == "roomNo" || key == "date") continue;
            toPush.key = details.key
        }
 
        room.mainInfo.push({
            toPush
        })
    }
 
    res.status(200).json({
        success : "true",
        room
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

        const result = [];

        const key = 100 * floorNo;

        for(let i = 1 ; i <= 6 ; ++i){
            const room = await Room.findOne({roomNo : key + i});
            console.log(key + i);

            const dateOfLast = room.mainInfo[room.mainInfo.length - 1].date;

            result.push(Date.now() - dateOfLast <= 24 * 60 * 60 * 1000 ? 1 : 0);
        }

        res.status(200).json({
            success : "true",
            result
        })

    }

    catch(err){
        return next(new ErrorHandler(err.message , 400));
    }
}

module.exports = { pushDetails , getRoomData , getFloorStatus};
