const express = require('express');
const router = express.Router();

let authController = require("../controllers/authController");

// akan dipanggil dengan route /api/blablabla
router.get('/', function(req, res) {
  res.json('pong')
});

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;
