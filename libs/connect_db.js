var mongoose = require('mongoose');
var db;

module.exports = function() {
	if(!db) {
		db = mongoose.connect('mongodb://localhost/hotsite');
		console.log('Conectado ao Mongo');		
	}
	return db;
}
//This file is responsible for the connection to the database