module.exports = function() {
	var db = require('./../libs/connect_db')();
	var Schema = require('mongoose').Schema;

	var customer = Schema({
		name: String,
		email: String
	});

	return db.model('customers', customer);
}