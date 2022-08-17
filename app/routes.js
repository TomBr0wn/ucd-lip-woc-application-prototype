const express = require('express')
const router = express.Router()

// Routes files for URLs/folders
router.use('/v1-1', require('./v1-1'))
router.use('/legal-rep-v1-1', require('./legal-rep-v1-1'))


// router.use('/v1-2', require('./v1-2'))

// router.use('/v1-3', require('./v1-3'))



module.exports = router
