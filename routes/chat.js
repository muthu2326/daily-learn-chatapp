var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});


module.exports = router;
