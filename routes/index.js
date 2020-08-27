const adminEndpoints = require('./endpoints/admin')
const userEndpoints = require('./endpoints/user')

const AuthController = require('../controllers/AuthController')

const index = require('express').Router()

index
.use('/admin', [adminMiddleware], adminEndpoints)
.use('/user', [userMiddleware], userEndpoints)
.get('/login', AuthController.loginForm)
.post('/login', AuthController.login)
.get('/register', AuthController.registerForm)
.post('/register', AuthController.register)

module.exports = index