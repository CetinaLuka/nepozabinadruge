var express = require('express');
var router = express.Router();

router.get('/chase', function(req, res, next) {
    res.render('minigames/chaseMinigame');
  });

module.exports = router;
