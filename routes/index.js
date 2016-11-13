var express = require('express');
var router = express.Router();
var model = require('./../model/customers')();
var mensagem = false;
/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { success: mensagem });
    mensagem = false;

});

/* POST home page. */
router.post('/add', function(req, res, next) {
	var body = req.body;
	model.create(body, function(err, customer) {
		if (err) {
			throw err;
      mensagem = false;
		}
    mensagem = true;
		res.redirect('/');
	});
});

module.exports = router;
