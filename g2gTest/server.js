const express = require('express')
const bodyParser = require('body-parser')
const g2gTestHandler = require('./g2gTest')

function rawBodySaver(req, res, buf) {
  if (buf && buf.length) {
    req.rawBody = buf
  }
}

const PORT_NUMBER = process.env.PORT || 8003
const server = express()

server.use(bodyParser.json({ verify: rawBodySaver, limit: '10mb' }))
server.get('/', (req, res) => res.sendStatus(200))

const app = server.listen(PORT_NUMBER, (err) => {
  if (err) console.error(err)
  console.log(`Server ready on PORT ${PORT_NUMBER}`)
})

server.use('/g2gTest', g2gTestHandler)