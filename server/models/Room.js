const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Regular", "Master"]
    },
    roomNo: {
        type: Number,
        required: true,
    },
    layoutMainImageCloudinary: {
        type: String,
        required: true
    },
    mainInfo: [{
        date: {
            type: Date,
            default: Date.now
        },

        livingRoom: {
            img: String,
            Telephone: Number,
            'Coffee Maker': Number,
            Fridge: Number,
            Water: Number,
            'Menu Card': Number
        },
        washRoom: {
            img: String,
            Towels: Number,
            Soap: Number,
            'Hair Dryer': Number,
            'Hot Water': Number,
            Flush: Number
        },
        bedRoom: {
            img: String,
            Pillow: Number,
            'Bed Sheets': Number
        },
        diningRoom: {
            Plates: Number,
            Glasses: Number,
            Napkin: Number
        }

    }]

}, {
    timestamps: true
})

module.exports = mongoose.model("Room", schema)

