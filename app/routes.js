const express = require('express')
const router = express.Router()

// Routes files for URLs/folders
router.use('/v1-1', require('./v1-1'))
router.use('/v2-1', require('./v2-1'))
router.use('/v3-1', require('./v3-1'))

module.exports = router