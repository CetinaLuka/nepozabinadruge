var express = require('express');
var router = express.Router();

router.get('/showchat', function(req, res, next) {
    res.render('bot/chat');
  });

module.exports = router;
