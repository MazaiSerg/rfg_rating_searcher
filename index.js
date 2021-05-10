const express = require('express')
const app = express()
const parser = require('./parser.js')

app.get('/', function (req, res) {
    //res.send('Hello World')
    res.set('Access-Control-Allow-Origin', '*')
    parser.parse(result => res.json(result))
})

app.listen(3000)