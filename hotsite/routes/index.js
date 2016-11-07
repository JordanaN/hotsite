var express = require('express');
var router = express.Router();
var model = require('./../model/customers')();

/* GET home page. */
router.get('/', function(req, res, next) {
	model.find(null, function(err, customers) {
		if(err) {
			throw err;
		}
  	res.render('index', { title: 'Expresss', customers: customers });
	});
});

/* POST home page. */
router.post('/add', function(req, res, next) {
	var body = req.body;
	model.create(body, function(err, customer) {
		console.log('aaa');
		if (err) {
			throw err;
		}
		res.redirect('/');
	});
});

module.exports = router;
