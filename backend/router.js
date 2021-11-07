const express = require('express');

const router = new express.Router();

router.get("/", (req, res) => {
    return res.send("Hello!!");
});

router.post("/create_room", (req, res) => {
    return require("./controllers/create_room")(req, res);
});

router.delete("/delete_room",(req, res) => {
    return require("./controllers/delete_room")(req, res);
});

module.exports = router;