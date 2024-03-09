const Room = require("../models/Room.js")
const ErrorHandler = require("../utils/errorHandler.js");

const createRoom = async(req , res , next)=>{
    try{
        const { type , layoutMainImageCloudinary} = req.body;

        const room = await Room.create({type , layoutMainImageCloudinary});

        res.json({
            success : true,
            message : "Room created successfully",
            room
        })
    }
    catch(err){
        return next(new ErrorHandler(err.message , 400));
    }
}

const pushSubImage = async(req, res , next)=>{
    try{
      
    const secureURL = req.secureURL;

    const roomId = req.params.roomId;

    await Room.findByIdAndUpdate(
        roomId,
        {
            $push : {layoutSubImagesCloudinary : secureURL}
        },
    )
 res.status(200).json({
    success : "true",
  })

}
catch(err){
  return next(new ErrorHandler(err.message , 400));
}
};

module.exports = {pushSubImage};
