var express = require('express')
var router = express.Router()

const hello = require('./hello')
router.use('/hello', hello)

module.exports = router
