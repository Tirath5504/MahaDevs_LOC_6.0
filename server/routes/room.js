const express = require("express");
const { pushSubImage } =  require("../controllers/room.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/room/subImage/:roomId" , pushSubImage)

module.exports =  router;




