const express = require('express')
const app = express()
const parser = require('./parser.js')

app.get('/', function (req, res) {
    //res.send('Hello World')
    parser.parse(result => res.json(result))
})

app.listen(3000)