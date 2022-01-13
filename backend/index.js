const ConnectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

ConnectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/', require('./CardRoute'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})