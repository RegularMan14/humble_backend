const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hello.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at the portal</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>VSauce</h1>')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
