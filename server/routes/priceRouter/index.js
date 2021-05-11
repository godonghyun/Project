const express = require('express');
const router = express.Router();
const Controller = require("./controller");

/* GET home page. */
router.get('/', Controller.getPriceAll);

router.get('/test', function(req, res, next) {
  res.send("hello");
});

module.exports = router;
