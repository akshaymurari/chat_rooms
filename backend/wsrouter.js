const {client} = require("./redis/connect");

const {publisher} = require("./redis/publisher");

const {format} = require("date-fns");


const ws_router = async (ws,msg,roomId) => {

    switch(msg.type){
        case "get_room_data":
            ws.send(JSON.stringify(await require("./utils/getRoomData")(roomId)));
            client.subscribe(roomId);
            break;
        case "send_message":
            let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
            msg.data.date=date;
            publisher.publish(roomId,JSON.stringify(msg));
            await require("./controllers/send_message")(roomId,msg);
            break;
    }
}

module.exports = ws_router;