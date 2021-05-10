const express = require('express');
const router = express.Router();
const Controller = require("./controller");

/* GET all store informations */
router.get('/all', Controller.getStoreAll);
router.get('/detail', Controller.getStoreDetail);

module.exports = router;
