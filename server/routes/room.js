const express = require("express");
const { pushSubImage, createRoom , getRoomData , getFloorStatus} =  require("../controllers/room.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/level.js");
const router = express.Router();

router.post("/room/subImage/:roomId" , isAuthenticated , pushSubImage)
router.get("/room/roomData/:index" , isAuthenticated , isAdmin , getRoomData);
router.get("/room/floorStatus/:floorNo" , isAuthenticated , getFloorStatus);

/*
floor number -> output : rooms -> [t,,t,f] 

room -> room.data

staff->name , email 

array of json : allocated rooms and how many done and not done




 */

module.exports =  router;




