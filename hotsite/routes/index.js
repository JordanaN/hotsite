var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var texto = 'Expresss';
  res.render('index', { title: texto });
});

module.exports = router;
