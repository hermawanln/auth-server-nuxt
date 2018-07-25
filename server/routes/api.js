const express = require('express');
const router = express.Router();

// akan dipanggil dengan route /api/blablabla
router.get('/', function(req, res) {
  res.json('pong')
});

module.exports = router;
