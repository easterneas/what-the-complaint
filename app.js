const express = require('express')
const route = require('./routes')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.engine('ejs', require('express-ejs-extend'))

app.use(express.urlencoded({ extended: true }))

app.use('/', route)


app.listen(port, () => {
    console.log(`Masuk pak eko di ${port}`);
})
