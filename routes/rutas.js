const express = require("express");
const router = express.Router()


const { home, signup, login } = require('../controllers/authControllers')

/* RUTAS */
router.route('/home').get(home)
router.route('/signup').get(signup)
router.route('/login').get(login)
module.exports = router