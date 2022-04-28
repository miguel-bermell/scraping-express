const { chromium } = require('playwright')
const { items } = require('../data/items')

exports.scrapingResults = async () => {
  const browser = await chromium.launch({
    args: ['--no-sandbox'],
    chromiumSandbox: false
  })

  const results = await Promise.allSettled(items.map(async item => {
    const { checkPrice, url, desiredPrice, grade } = item
    const page = await browser.newPage()
    await page.goto(url)

    const { currentPrice, isAvailable, paymentImages } = await checkPrice({ page, desiredPrice, grade })

    await page.close()
    return {
      ...item,
      currentPrice,
      isAvailable,
      paymentImages
    }
  }))

  await browser.close()
  return results.filter(result => result.status === 'fulfilled').map(result => result.value)
}
