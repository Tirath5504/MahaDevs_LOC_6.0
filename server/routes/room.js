const express = require("express");
const { pushDetails , getRoomData , getFloorStatus} =  require("../controllers/room.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/room/details/:roomId" , isAuthenticated , pushDetails)
router.get("/room/roomData/:index" , isAuthenticated , getRoomData);
router.get("/room/floorStatus/:floorNo" , isAuthenticated , getFloorStatus);

/*
floor number -> output : rooms -> [t,,t,f] 

room -> room.data

staff->name , email 

array of json : allocated rooms and how many done and not done

 */

module.exports =  router;




