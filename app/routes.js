const express = require('express')
const router = express.Router()

// Routes files for URLs/folders
router.use('/v1-1', require('./v1-1'))
router.use('/v2-1', require('./v2-1'))


// 510
router.use('/v-510', require('./v3-1'))
router.use('/v-510X', require('./v3-1X'))

// 2700
router.use('/v-2700', require('./v4-1'))
router.use('/v-2700X', require('./v4-1X'))


// 6000
router.use('/v-6000', require('./v5-1'))

module.exports = router
