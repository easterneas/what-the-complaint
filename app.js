const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.engine('ejs', require('express-ejs-extend'))

app.use(express.urlencoded({ extended: true }))
