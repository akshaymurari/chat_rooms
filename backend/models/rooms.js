const mongoose = require('mongoose');

const room_schema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        username: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    }]
});

const room = mongoose.model('Room', room_schema);

module.exports = room;