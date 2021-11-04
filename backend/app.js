const express = require("express");

const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port ${port}");
    }
});

app.enable("trust proxy");

app.get("/", (req, res) => {
    return res.send("Hello World");
});