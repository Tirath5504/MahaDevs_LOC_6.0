const Room = require("../models/Room.js")
const ErrorHandler = require("../utils/errorHandler.js");

const pushDetails = async (req, res, next) => {
    //{date,sectionName,link,inventaryChecks}
    try {
        const roomNo = req.params.roomId;
        const details = req.body;

        let room = await Room.findOne({ roomNo: roomNo });
        const dateOfInput = details.date;

        if (room.mainInfo.length > 0 && (dateOfInput - room.mainInfo[room.mainInfo.length - 1].date <= 24 * 60 * 60 * 1000)) {
            const section = {};
            for (let key in details) {
                if (key === "roomNo" || key === "date" || key === "sectionName") continue;
                section[key] = details[key];
            }
            room.mainInfo[room.mainInfo.length - 1] = { ...room.mainInfo[room.mainInfo.length - 1], [details.sectionName]: section }
            // room.mainInfo[room.mainInfo.length - 1][details.sectionName] = section;
        }
        else {

            const toPush = {
                date: dateOfInput
            }
            const section = {

            }

            for (let key in details) {
                if (key == "roomNo" || key == "date" || key == "sectionName") continue;
                section[key] = details[key]
            }
            toPush[details.sectionName] = section;
            room.mainInfo.push({
                toPush
            })
        }
        await room.save();
        res.status(200).json({
            success: "true",
            room
        })

    }
    catch (err) {
        return next(new ErrorHandler(err.message, 400));
    }
};
const getAllData = async (req, res, next) => {
    const data = await Room.find({});
    return res.json({ success: true, data });
}
const getRoomData = async (req, res, next) => {

    try {

        const index = req.params.index;

        const room = await Room.findOne({ roomNo: index });
        let roomData = {};
        if (room.mainInfo.length > 0)
            roomData = room.mainInfo[room.mainInfo.length - 1];
        else
            return res.json({ success: false });
        res.status(200).json({
            success: "true",
            room: roomData
        })
    }
    catch (err) {
        return next(new ErrorHandler(err.message, 400));
    }
}

const getFloorStatus = async (req, res, next) => {
    try {
        const floorNo = req.params.floorNo;

        const result = [];

        const key = 100 * floorNo;

        for (let i = 1; i <= 6; ++i) {
            const room = await Room.findOne({ roomNo: key + i });
            if (room.mainInfo.length == 0)
                result.push(false);
            else {
                const dateOfLast = room.mainInfo[room.mainInfo.length - 1].date;
                result.push((Date.now() - dateOfLast) <= 24 * 60 * 60 * 1000);
            }
        }

        res.status(200).json({
            success: "true",
            result
        })

    }

    catch (err) {
        return next(new ErrorHandler(err.message, 400));
    }
}

module.exports = { pushDetails, getRoomData, getFloorStatus ,getAllData};
