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

app.listen(port, (err) => {
    if (err) {
        console.log("error",err);
    } else {
        console.log("Server is running on port ${port}");
    }
});


