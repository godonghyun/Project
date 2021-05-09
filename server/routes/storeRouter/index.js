const express = require('express');
const router = express.Router();
const Controller = require("./controller");

/* GET home page. */
router.get('/', Controller.store);

module.exports = router;
