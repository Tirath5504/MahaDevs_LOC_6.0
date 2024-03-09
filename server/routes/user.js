const express = require("express");
const { register , login , logout , createStaff} =  require("../controllers/user.js");
const  isAuthenticated  = require("../middlewares/auth.js");
const router = express.Router();

router.post("/register" , register)

router.post("/login" , login)

router.get("/logout" , isAuthenticated , logout);

router.post("/createStaff" , isAuthenticated , createStaff);

module.exports =  router;




