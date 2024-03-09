const express = require("express");
const { createHotel } =  require("../controllers/hotel.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/level.js");
const router = express.Router();

router.post("/hotel/create" , isAuthenticated , isAdmin , createHotel)

module.exports =  router;




