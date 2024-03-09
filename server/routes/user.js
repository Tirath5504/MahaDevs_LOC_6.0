const express = require("express");
const { register , login , logout , createStaff , deleteStaff} =  require("../controllers/user.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/user/register" , register)

router.post("/user/login" , login)

router.get("/user/logout" , isAuthenticated , logout);

router.post("/user/createStaff" , isAuthenticated ,  createStaff);

router.delete("/user/deleteStaff/:staffID" , isAuthenticated , deleteStaff);

module.exports =  router;




