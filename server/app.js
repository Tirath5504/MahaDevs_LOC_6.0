const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/user.js");
const errorHandler = require("./middlewares/error.js");
const level = require("./middlewares/level.js");
const {config} =  require("dotenv");
const cors = require("cors");

const app = express();

config({
    path:"./data/config.env",
})

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(userRouter);
app.use(errorHandler);
app.use(level);
app.use(cors())

module.exports.app = app;



