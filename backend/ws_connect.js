const WebSocket = require('ws');

const {server} = require("./app");

const wss = new WebSocket.Server({ server });

const room = require("./models/rooms");

const getRoomData = require("/utils/getRoomData");

wss.on("connection", (ws) => {
    ws.on("message", async (message) => {
        let msg = JSON.parse(message);
        if(msg.info==="get_room_data"){
            ws.send(JSON.stringify(await getRoomData()));
        }
        // wss.clients.forEach((client) => {
        //     if (client.readyState === WebSocket.OPEN && client !== ws) {
        //         client.send(message);
        //     }
        // });
    });
});

