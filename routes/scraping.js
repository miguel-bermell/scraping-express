const express = require('express')
const router = express.Router()
const { scrapingResults } = require('../services/scraping')

router.get('/results', async (req, res) => {
  try {
    const results = await scrapingResults()
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
