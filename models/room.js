const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    maxCount: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    rentFeePerMonth: {
        type: Number,
        require: true
    },
    imageUrls: [],
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});

const roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel;