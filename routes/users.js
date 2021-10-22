var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Nikhil Nagabandi respond with a resource');
});

module.exports = router;
