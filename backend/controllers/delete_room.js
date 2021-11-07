const room = require("../models/rooms");

const deleteRoom = async (req, res) => {
    try{
        const { roomId, password } = req.body;
        try{
            await room.deleteOne({
                roomId,
                password
            });
            return res.json({
                message: "Room deleted successfully",
                status:200,
            });
        }
        catch(err){
            return res.json({
                message: "invalid roomId or password",
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

module.exports = deleteRoom;