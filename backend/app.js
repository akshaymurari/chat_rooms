const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.enable("trust proxy");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

require("./database/connect");

app.use(require("./router"));

const port = process.env.PORT || 8000;

const server = app.listen(port, (err) => {
    if (err) {
        console.log("error",err);
    } else {
        console.log("Server is running on port ${port}");
    }
});

//redis connect

require("./redis/connect").connect();

require("./redis/publisher").connect();

const {client} = require("./redis/connect");

const {publisher} = require("./redis/publisher");

// websocket connection

const WebSocket = require('ws');

const wss = new WebSocket.Server({ server });

const getRoomData = require("./utils/getRoomData");

const ws_router = require("./ws_router");

const {format} = require("date-fns");

wss.on("connection", (ws) => {
    //store a channel name
    var roomId = "";
    ws.on("message", async (message) => {
        let msg = JSON.parse(message);
        ws_router(ws,msg);
        channel=msg.roomId;
        // wss.clients.forEach((client) => {
            //     if (client.readyState === WebSocket.OPEN && client !== ws) {
                //         client.send(message);
                //     }
                // });
    });

    ws.on("close", () =>{
        client.unsubscribe();
        client.quit();
        publisher.quit();
    });

    client.on("message",(channel, message) => {
        console.log(channel,roomId);
        if(channel === roomId){
            let msg = JSON.parse(message);
            let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
            msg.date=date;
            ws.send(msg);
        }
    });

});
        


module.exports = {
    server,
    client
}
