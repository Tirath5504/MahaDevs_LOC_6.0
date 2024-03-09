const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/user.js");
const roomRouter = require("./routes/room.js")
const { initializeRooms, dropRoom } = require("./script/initRooms.js");
const errorHandler = require("./middlewares/error.js");
const { config } = require("dotenv");
const cors = require("cors");

const app = express();

config({
    path: "./data/config.env",
})

// initializeRooms()
//     .then(() => {
//         console.log("Rooms initialized successfully");
//     })
//     .catch((err) => {
//         console.error("Error initializing rooms:", err);
//     });

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(userRouter);
app.use(roomRouter);
app.use(errorHandler);

module.exports.app = app;



