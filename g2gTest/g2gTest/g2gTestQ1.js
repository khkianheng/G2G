async function g2gTestQ1F(req, res) {
  const {
    receivedText,
  } = req.body

  const convertSmallCase = receivedText.toLowerCase()
  return res.status(200).json(convertSmallCase)
}

module.exports = g2gTestQ1F