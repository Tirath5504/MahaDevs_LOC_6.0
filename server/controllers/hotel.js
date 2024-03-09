const Hotel = require("../models/Hotel.js");
const ErrorHandler = require("../utils/errorHandler.js");

const createHotel = async(req, res , next)=>{
  try{

  const {name , admin , staffIDS , location , numFloors , numRooms , rooms} = req.body;

  if(req.isAdmin == false){
    return next(new ErrorHandler("Only admin can add a new hotel" , 400));
  }

  const hotel = new Hotel({ 
    name,
    admin,
    staffIDS,
    location,
    numFloors,
    numRooms,
    rooms
 });

 await hotel.save();

 res.status(200).json({
    success : "true",
    hotel,
  })

}
catch(err){
  return next(new ErrorHandler(err.message , 400));
}
};

module.exports = {createHotel};
