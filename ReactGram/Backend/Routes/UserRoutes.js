const express = require("express")
const router = express.Router()

//CONTROLER
const {register} = require("../Controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const { userCreateValidation } = require("../middlewares/userValidations")

//Routes
router.post("/register",userCreateValidation(),validate,register)

module.exports = router