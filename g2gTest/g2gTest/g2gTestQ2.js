const needle = require('needle');

async function g2gTestQ2F(req, res) {
  const {
    keyInAmt,
    fromCurrency,
    toCurrency,
  } = req.body

  const API_KEY = '077fc1454cabf97681de'
  const convertedCurrency = await needle('get', `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${API_KEY}`)
  .then(function(resp) {
    return resp.body
  })
  .catch(function(err) {
    return err
  })

  if (convertedCurrency[`${fromCurrency}_${toCurrency}`] === undefined) {
    return res.status(400).json({ error: 'Invalid Currency Format' })
  }
  const totalAmount = (Number(keyInAmt) * convertedCurrency[`${fromCurrency}_${toCurrency}`])
  return res.status(200).json(totalAmount)
}

module.exports = g2gTestQ2F
