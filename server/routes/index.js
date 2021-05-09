const express = require('express')
const router = express.Router()

// Import Router End Point
const storeRouter = require('./storeRouter')
const priceRouter = require('./priceRouter')
const usersRouter = require('./userRouter')

// Routing end-point
router.use('/store', storeRouter)

router.use('/price', priceRouter)

router.use('/users', usersRouter)

module.exports = router