var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('request/list');
});

router.get('/add', function(req, res, next) {
    res.render('request/newRequest');
  });

module.exports = router;
