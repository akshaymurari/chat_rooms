const {client} = require("./redis/connect");

const {publisher} = require("./redis/publisher");

const ws_router = async (ws,msg) => {

    switch(msg.type){
        case "get_room_data":
            ws.send(JSON.stringify(await require("./utils/getRoomData")(msg)));
            client.subscribe(msg.roomId);
            break;
        case "send_message":
            publisher.publish(msg.roomId,JSON.stringify(msg));
            break;
    }
}

module.exports = ws_router;