const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()
const user_controller = new UserController()

router.post('/register', user_controller.register)
router.post("/login", user_controller.login)
router.get("/logout", user_controller.logout)
router.get("/user_count",user_controller.get_user_count)
router.get("/get_user",user_controller.get_user)

module.exports = router

