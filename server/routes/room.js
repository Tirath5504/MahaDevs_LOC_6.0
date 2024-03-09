const express = require("express");
const { pushSubImage, createRoom } =  require("../controllers/room.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/level.js");
const router = express.Router();

router.post("/room/subImage/:roomId" , isAuthenticated , pushSubImage)
router.post("/room/createRoom" , isAuthenticated , isAdmin , createRoom);

module.exports =  router;




