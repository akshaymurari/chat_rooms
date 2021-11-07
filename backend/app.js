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

const ws_router = require("./wsrouter");

const {parse} = require("url");

wss.on("connection", (ws,request) => {
    //store a channel name
    var roomId = request.url.substring(1,request.url.length);
    ws.on("message", async (message) => {
        let msg = JSON.parse(message);
        ws_router(ws,msg,roomId);
    });

    // ws.on("close", () =>{
    //     client.unsubscribe();
    //     client.quit();
    //     publisher.quit();
    // });

    client.on("message",async (channel, message) => {
        if(channel === roomId){
            let msg = JSON.parse(message);
            ws.send(JSON.stringify(msg));
        }
    });

});


module.exports = {
    server,
    client
}
