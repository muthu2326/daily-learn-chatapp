const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Daily Learn Chat app Node JS Server' });
});

router.get('/socket.io.js', (req, res, next) => {
  return res.sendFile(path.join(__dirname, '../') + '/node_modules/socket.io-client/dist/socket.io.js');
});

router.get('/socket.io-file-client.js', (req, res, next) => {
  return res.sendFile(path.join(__dirname, '../') + '/node_modules/socket.io-file-client/socket.io-file-client.js');
});

router.get('/files/download', (req, res, next) => {
  var fileName = req.query.name;
  console.log(fileName)
  return res.sendFile(path.join(__dirname, '../') + '/uploads/' + fileName);
});

module.exports = router;
