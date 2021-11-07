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

var online_users = [];

var bool_users = new Map();

wss.on("connection", (ws,request) => {
    //store a channel name
    console.log(bool_users);
    var roomId = request.url.substring(1,request.url.length);
    ws.on("message", async (message) => {
        let msg = JSON.parse(message);
        if(msg.type==="ONLINE"){
            if(!bool_users.get(msg.username)){
                ws.user = msg.username;
                online_users.push(msg.username);
                bool_users.set(msg.username,true);
                // console.log("online users",online_users.length);
                wss.clients.forEach(client => {
                    if(client.readyState === WebSocket.OPEN){
                        client.send(JSON.stringify({
                            type:"ONLINE",
                            online_users
                        }));
                    }
                });
            }else{
                ws.send(JSON.stringify({
                    type:"ONLINE",
                    online_users
                }));
            }
        }else{
            ws_router(ws,msg,roomId);
        }
    });

    ws.on("close", () => {
        console.log("closed");
        bool_users.set(ws.user,false);
        online_users = online_users.filter(user => user !== ws.user);
        // console.log("online users",online_users.length);
        // i=0
        wss.clients.forEach(client => {
            // i+=1;
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify({
                    type:"ONLINE",
                    online_users
                }));
            }
            // console.log(i);
        });
    });

    ws.on("error", (err) => {
        console.log("error",err);
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
