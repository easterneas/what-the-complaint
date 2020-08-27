const AuthController = require('../controllers/AuthController')
const adminEndpoints = require('./endpoints/admin')
const userEndpoints = require('./endpoints/user')

const isAuthenticated = require('../middleware/isAuthenticated')
const isAdmin = require('../middleware/isAdmin')

const index = require('express').Router()

index
.get('/', (req, res) => {
    res.redirect('/customer')
})
.get('/login', AuthController.loginForm)
.post('/login', AuthController.login)
.get('/register', AuthController.registerForm)
.post('/register', AuthController.register)

// to use /customer, check if the user is authenticated
index.use('/customer', isAuthenticated, userEndpoints)

// to use /admin, check if the user is authenticated and has admin access
index.use('/admin', isAuthenticated, isAdmin, adminEndpoints)



module.exports = index