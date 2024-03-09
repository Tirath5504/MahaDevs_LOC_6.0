const express = require("express");
const { register , login , logout , createStaff} =  require("../controllers/user.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/level.js");
const router = express.Router();

router.post("/user/register" , register)

router.post("/user/login" , login)

router.get("/user/logout" , isAuthenticated , logout);

router.post("/user/createStaff" , isAuthenticated , isAdmin , createStaff);

module.exports =  router;




