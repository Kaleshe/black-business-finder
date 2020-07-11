const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: "Black Business API", message: "Look for a business"});
});

module.exports = router;