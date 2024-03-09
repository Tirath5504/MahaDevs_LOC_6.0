const Hotel = require("../models/Hotel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");

const createHotel = async(req, res , next)=>{
  try{

  const {name , admin , staffIDS , location , numFloors , numRooms , rooms} = req.body;

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
