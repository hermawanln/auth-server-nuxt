const express = require('express');
const router = express.Router();

let authController = require("../controllers/authController");
let userController = require("../controllers/userController");

// akan dipanggil dengan route /api/auth/blablabla
router.get('/', userController.pingMe);

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;
