let id = 0

exports.items = [
  {
    id: ++id,
    name: 'iPhone 11 white',
    url: 'https://www.backmarket.es/iphone-11-64-gb-blanco-libre-segunda-mano/290058.html#l=11',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290058_5a8c1eca-4cef-46b5-904a-1e702874102e.jpg',
    desiredPrice: 365,
    quality: 'Very good',
    grade: '0',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 white',
    url: 'https://www.backmarket.es/iphone-11-64-gb-blanco-libre-segunda-mano/290058.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290058_5a8c1eca-4cef-46b5-904a-1e702874102e.jpg',
    desiredPrice: 390,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 black',
    url: 'https://www.backmarket.es/iphone-11-64-gb-negro-libre-segunda-mano/290057.html',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_b4c7419d-aa1b-47dc-a956-4afbd61d7d1f.jpg',
    desiredPrice: 340,
    quality: 'Good',
    grade: '0',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 black',
    url: 'https://www.backmarket.es/iphone-11-64-gb-negro-libre-segunda-mano/290057.html#l=11',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_b4c7419d-aa1b-47dc-a956-4afbd61d7d1f.jpg',
    desiredPrice: 365,
    quality: 'Very good',
    grade: '1',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 black',
    url: 'https://www.backmarket.es/iphone-11-64-gb-negro-libre-segunda-mano/290057.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_b4c7419d-aa1b-47dc-a956-4afbd61d7d1f.jpg',
    desiredPrice: 390,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 Red',
    url: 'https://www.backmarket.es/iphone-11-64-gb-rojo-libre-segunda-mano/290060.html',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290060_374aef9d-24fa-4d24-bb8c-f27ce27b711f.jpg',
    desiredPrice: 340,
    quality: 'Good',
    grade: '0',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 Red',
    url: 'https://www.backmarket.es/iphone-11-64-gb-rojo-libre-segunda-mano/290060.html#l=11',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290060_374aef9d-24fa-4d24-bb8c-f27ce27b711f.jpg',
    desiredPrice: 365,
    quality: 'Very good',
    grade: '1',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone 11 Red',
    url: 'https://www.backmarket.es/iphone-11-64-gb-rojo-libre-segunda-mano/290060.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290060_374aef9d-24fa-4d24-bb8c-f27ce27b711f.jpg',
    desiredPrice: 390,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone XS black',
    url: 'https://www.backmarket.es/iphone-xs-64-gb-gris-espacial-libre-segunda-mano/178592.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/178592_30d6c2d0-e377-4628-9e08-16e9f52e12b1.jpg',
    desiredPrice: 270,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone XS gold',
    url: 'https://www.backmarket.es/iphone-xs-64-gb-oro-libre-segunda-mano/175669.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/175669_f5ca2766-c738-47d5-a4d0-3fa1fe3a0132.jpg',
    desiredPrice: 270,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'iPhone XS silver',
    url: 'https://www.backmarket.es/iphone-xs-64-gb-plata-libre-segunda-mano/169106.html#l=10',
    image: 'https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/169106_11901274-0c4c-41d8-b496-b4dce7e83569.jpg',
    desiredPrice: 270,
    quality: 'Excellent',
    grade: '2',
    checkPrice: ({ page, desiredPrice, grade }) => checkPriceBackMarket(page, desiredPrice, grade)
  },
  {
    id: ++id,
    name: 'HyperX Cloud II Wireless',
    url: 'https://www.amazon.es/HyperX-Cloud-Wireless-auriculares-inal%C3%A1mbricos/dp/B08NTYB4M7/?_encoding=UTF8&pd_rd_w=L2WGT&pf_rd_p=5f6951c0-9d61-4e03-b39a-a5647d9ae575&pf_rd_r=34X2A0T5A0PC0VAJ755B&pd_rd_r=96f20a18-926c-45a1-9a60-b12c950d8ebc&pd_rd_wg=Aqo6D&ref_=pd_gw_ci_mcx_mr_hp_atf_m&th=1',
    image: 'https://m.media-amazon.com/images/I/61IBJwpcb6L._AC_SX425_.jpg',
    desiredPrice: 110,
    checkPrice: async ({ page, desiredPrice }) => {
      const content = await page.textContent(
        '.a-offscreen'
      )
      const price = +content.slice(0, -4)
      return {
        currentPrice: price,
        isAvailable: price <= desiredPrice
      }
    }
  }
]

const checkPriceBackMarket = async (page, desiredPrice, gradeNumber) => {
  const grade = `[data-qa="grade-${gradeNumber}"]`
  const content = await (await page.waitForSelector(grade)).$eval('p:last-child', el => el.innerText)

  await new Promise(resolve => setTimeout(resolve, 2000))
  const paymentImages = await page.innerHTML('[data-test="payWithRest"]')

  const getAllSrcFrompayment = (html) => {
    if (!html) return []
    const images = html.match(/src="(.*?)"/g)
    return images.map((image) => image.slice(5, -1))
  }

  const price = +content.slice(0, -5)

  return {
    currentPrice: price,
    isAvailable: price <= desiredPrice,
    paymentImages: getAllSrcFrompayment(paymentImages)
  }
}
