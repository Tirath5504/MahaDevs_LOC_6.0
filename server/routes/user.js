const express = require("express");
const { register , login , logout , createStaff , deleteStaff,getStaff,getAllStaff} =  require("../controllers/user.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/user/register" , register)

router.post("/user/login" , login)

router.get("/user/logout" , isAuthenticated , logout);

router.post("/user/createStaff" , isAuthenticated ,  createStaff);

router.delete("/user/deleteStaff/:staffID" , isAuthenticated , deleteStaff);

router.get("/user/getStaff" , isAuthenticated , getStaff);

router.get("/user/getAllStaff" , isAuthenticated , getAllStaff);

module.exports =  router;




