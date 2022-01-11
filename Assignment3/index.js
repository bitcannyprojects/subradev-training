const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const path = require('path')
const bodyParser = require('body-parser')

require('./src/database/index')
const routers = require('./routes/index')


app.use(bodyParser.json())

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.use('/', routers)


app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})


module.exports = app.listen(port, () => {
    console.log(`server is listeing on http://localhost:${port}`);
})
//