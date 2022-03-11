const express = require('express')()
const g2gTestQ1Handler = require('./g2gTestQ1')
const g2gTestQ2Handler = require('./g2gTestQ2')

express.post('/g2gTestQ1', g2gTestQ1Handler)
express.post('/g2gTestQ2', g2gTestQ2Handler)


module.exports = express