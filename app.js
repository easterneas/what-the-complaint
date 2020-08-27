const express = require('express')
const session = require('express-session')
const route = require('./routes')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.engine('ejs', require('express-ejs-extend'))

const sessionConf = {
    secret: 'BHbkJbskksLjknJNljksnLKJDSds',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}

// karena kita pakai cookie yang secure,
// minimal harus pakai HTTPS dan pakai trust proxy
if(app.get('env') === 'production'){
    app.set('trust proxy', 1) // trust first proxy
    sessionConf.cookie.secure = true
}

// initialize session
app.use(session(sessionConf))

app.use(express.urlencoded({ extended: true }))

app.use('/', route)

app.listen(port, () => {
    console.log(`Masuk pak eko di ${port}`);
})
