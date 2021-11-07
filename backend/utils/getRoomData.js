const room = require('../models/rooms');

const getRoomData = async (roomId) => {
    try{
        const roomData = await room.findOne({
            roomId
        }).select("roomId","createdAt","messages");
        console.log(roomData);
        return roomData;
    }catch(err){
        console.log(err);
        return [];
    }
}

module.exports = getRoomData;