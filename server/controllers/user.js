const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");
const Room = require("../models/Room.js");

const passOkChars = /([a-z])+([A-Z])+([0-9])+([^a-zA-Z0-9])+/;
const passOkLen = /^\w{8,16}$/;
const okEmail = /(\w+[\.\-\_]?)*\w\@(\w+\-)*(\w+\.)+\w+/;

const login = async (req, res, next) => {
  try {

    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) return next(new ErrorHandler("User does not exist", 400));
    console.log(user);
    const result = await bcrypt.compare(
      password,
      user.password,
    );

    if (!result) return next(new ErrorHandler("Incorrect password , try again", 400));

    const authToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      success: "true",
      user,
      authToken,
    })

  }
  catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
};

const register = async (req, res, next) => {

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User already exists", 400));

    if (!(okEmail.test(email))) {
      return next(new ErrorHandler("Please enter a valid email", 400));
    }

    if (!(passOkChars.test(password) && passOkLen.test(password))) {
      return next(new ErrorHandler("Please enter a valid password", 400));
    }

    const hashedPassword = await bcrypt.hash(password, process.env.SALT);

    user = await User.create({ name, email, password: hashedPassword, isAdmin: true, roomsUnder: [] });

    const authToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: "Successful registration",
      user,
      authToken,
    });

  }

  catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
};

const getStaff = async (req, res, next) => {
  let user = await User.findById(req.user.user_id);
  if (!user) return next(new ErrorHandler("Staff Not Exist!!", 404));
  let roomsUnder = {}
  for (const room of user.roomsUnder) {
    const roomData = await Room.findOne({ roomNo: room });
    roomsUnder[room] = !(roomData.mainInfo.length == 0 || (Date.now() - roomData.mainInfo[roomData.mainInfo.length - 1].date) >= (24 * 60 * 60 * 1000));
  }
  console.log(roomsUnder);
  let staff = { email: user.email, name: user.name, isAdmin: user.isAdmin, roomsUnder };
  res.json({ success: true, user: staff });
}

const getAllStaff = async (req, res, next) => {
  const staff = await User.find({ isAdmin: false });
  res.send({ success: true, staff });
}

const logout = async (req, res, next) => {
  res.json({
    success: true,
    message: "Successful logout",
  });
};

const createStaff = async (req, res, next) => {

  const { name, email, password, roomsUnder } = req.body;

  try {

    console.log(req.user.user_id);
    const hashedPassword = await bcrypt.hash(password, process.env.SALT);

    const user = await User.findById(req.user.user_id);

    console.log(user);

    if (user.isAdmin == false) {
      return next(new ErrorHandler("Only admins allowed to create new staff", 400));
    }

    const newStaff = await User.create({ name, email, password: hashedPassword, isAdmin: false, roomsUnder });

    res.json({
      success: true,
      message: "New staff added successfully",
      newStaff
    });
  }

  catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
}

const deleteStaff = async (req, res, next) => {
  console.log(req.params.staffID);
  const staffToDelete = await User.findById(req.params.staffID);
  if (!staffToDelete) return next(new ErrorHandler("Staff Not Exist!!", 400));
  await User.deleteOne({ _id: req.params.staffID });

  res.status(201).send({
    success: true,
    message: "Staff deleted successfully",
    staffToDelete
  })

}

module.exports = { login, register, logout, createStaff, deleteStaff, getStaff, getAllStaff };
