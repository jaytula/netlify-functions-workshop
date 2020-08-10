const request = require('axios')
const cheerio = require('cheerio')

exports.handler = async (event, context) => {
  const url = 'https://slashdot.org'
  try {
    const { data } = await request(url)
    const $ = cheerio.load(data)
    /* queryDOM */
    const items = $('#firehoselist article h2.story .story-title > a')
    // console.log('items', items)
    const itemsText = items.map((i, el) => {
      return $(el).attr('href').trim()
    })
    console.log('itemsText', itemsText.toArray())
    return {
      statusCode: 200,
      body: JSON.stringify({
        items: itemsText,
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error
      })
    }
  }
}
