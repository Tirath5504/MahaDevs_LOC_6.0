const express = require("express");
const { createHotel } =  require("../controllers/hotel.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/hotel/create" , createHotel)

module.exports =  router;




