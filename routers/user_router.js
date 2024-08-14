const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()
const user_controller = new UserController()

router.post('/register', user_controller.register)
router.post("/login", user_controller.login)
router.get("/logout", user_controller.logout)

module.exports = router

