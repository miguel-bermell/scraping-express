const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { sendSms } = require('./services/notifySms')
const { scrapingResults } = require('./services/scraping')
const app = express()
const alreadySended = []

const getScrapingResults = async () => {
  const results = await scrapingResults()
  const productsAvailables = results.filter(product => product.isAvailable && !alreadySended.includes(product.id))
  const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER

  if (productsAvailables.length) {
    productsAvailables.forEach(async (product) => {
      await sendSms(MY_PHONE_NUMBER, `${product.name} está disponible por ${product.currentPrice}€`)
      alreadySended.push(product.id)
    })
  }
}

;(async () => {
  await getScrapingResults()
  setInterval(async () => await getScrapingResults(), 600000)
})()

const scrapingRoute = require('./routes/scraping')

app.use(cors())
app.use(express.json())

app.use('/scraping', scrapingRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
