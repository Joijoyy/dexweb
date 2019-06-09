const express = require('express')
const config = require('./config.js')
const web = require('./src/frontend/routes/web')
const app = express()
const port = config.DEFAULT_PORT
const hostname = config.DEFAULT_HOST

app.set('views', './src/frontend/views')
app.set('view engine', 'pug')
app.use(express.static('./src/frontend/public'))

app.use('/', web)

app.listen(port, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})