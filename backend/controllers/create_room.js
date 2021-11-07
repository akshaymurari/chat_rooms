const room = require("../models/rooms");

const createRoom = async (req, res) => {
    try{
        const { roomId, password } = req.body;
        try{
            const newRoom = room({
                roomId,
                password
            });
            const roomCreated = await newRoom.save();
            return res.json({
                message: "Room created successfully",
                status:200,
                roomCreated
            });
        }
        catch(err){
            return res.json({
                message: "Room already exists",
                status:400,
            });
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = createRoom;