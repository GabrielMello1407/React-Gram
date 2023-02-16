const express = require("express")
const router = express.Router()

//CONTROLER
const {register , login, getCurrentUser} = require("../Controllers/UserController")


//middlewares
const validate = require("../middlewares/handleValidation")
const { userCreateValidation , loginValidation } = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

//Routes
router.post("/register",userCreateValidation(),validate,register)
router.post("/login",loginValidation(),validate,login)
router.get("/profile", authGuard,getCurrentUser)

module.exports = router