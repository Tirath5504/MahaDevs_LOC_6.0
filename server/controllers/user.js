const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");

const passOkChars = /([a-z])+([A-Z])+([0-9])+([^a-zA-Z0-9])+/;
const passOkLen = /^\w{8,16}$/;
const okEmail = /(\w+[\.\-\_]?)*\w\@(\w+\-)*(\w+\.)+\w+/;

const login = async(req, res , next)=>{
  try{

  const {staffID , password} = req.body;
  const user = await User.findOne({ staffID });

  if (!user) return next(new ErrorHandler("User does not exist" , 400));

  const result = await bcrypt.compare(
    password,
    user.password,
  );

  if (!result) return next(new ErrorHandler("Incorrect password , try again" , 400));

  const authToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET , {expiresIn:"1d"}); 

  res.status(200).json({
    success : "true",
    authToken,
    isAdmin : user.auth === "Admin"
  })

}
catch(err){
  return next(new ErrorHandler(err.message , 400));
}
};

const register = async(req, res , next)=>{

  const { name, email, password , staffID , auth } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User already exists" , 400));

    if(!(okEmail.test(email))){
      return next(new ErrorHandler("Please enter a valid email" , 400));
    }

    if(!(passOkChars.test(password) && passOkLen.test(password))){
      return next(new ErrorHandler("Please enter a valid password" , 400));
    }

    const hashedPassword =  await bcrypt.hash(password, process.env.SALT);

    user = await User.create({ name, email, password: hashedPassword , staffID , auth });

    const authToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET ); 

    res.json({
      success: true,
      message: "Successful registration",
      user,
      authToken,
    });

  } 

  catch (err) {
    return next(new ErrorHandler(err.message , 400));
  }
};


const logout = async (req, res , next) => {
    res.json({
        success: true,
        message: "Successful logout",
      });
};

const createStaff = async(req , res , next) => {

    const {name , email , password , staffID , floorUnder , roomsUnder} = req.body;

    try{

      console.log(req.user.user_id);

      const user = await User.findById(req.user.user_id);

      console.log(user);

        if(user.auth == "Staff"){
            return next(new ErrorHandler("Only admins allowed to create new staff" , 400));
        }

        const newStaff = await User.create({name , email , password , staffID , auth : "Staff" , floorUnder , roomsUnder});

        res.json({
            success: true,
            message: "New staff added successfully",
            newStaff,
          });
    }

    catch (err) {
        return next(new ErrorHandler(err.message , 400));
      }
}

module.exports = {login , register , logout , createStaff};
