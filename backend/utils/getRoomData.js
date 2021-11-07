const room = require('../models/rooms');

const getRoomData = async (roomId) => {
    try{
        const roomData = await room.findOne({
            roomId
        }).select({"roomId":1,"createdAt":1,"messages":1});
        console.log(roomData);
        return roomData;
    }catch(err){
        console.log(err);
        return [];
    }
}

module.exports = getRoomData;