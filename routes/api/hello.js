const express = require('express')
const router = express.Router()

// GET /api/hello -> { data: "hello world" }
router.get('/', (req, res) => {
  res.json({ data: 'hello world' })
})

module.exports = router
