const room = require("../models/rooms");


const send_message = async (roomId,msg) => {
    try {
        console.log(msg);
        const {message,date,username} = msg.data;
        console.log({message,date,username})
        const room_data = await room.findOne({
            roomId
        });
        room_data.messages.push({
            message,
            date,
            username
        });
        await room_data.save();
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = send_message;