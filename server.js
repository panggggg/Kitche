const express = require('express')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const menu = require('./src/models/menuModel')
const user = require('./src/models/userModel')
const login = require('./src/models/loginModel')
const bodyParser = require('body-parser')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/kitche-db")

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const routes = require('./src/routes/Routes')
routes(app)

app.listen(port)
console.log('Server is running on PORT 3000')
