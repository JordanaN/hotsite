var mongoose = require('mongoose');
var dotenv = require('dotenv');
var db;

dotenv.load();

module.exports = function() {
	if(!db) {
		db = mongoose.connect(process.env.DB_HOST);
		console.log('Conectado ao Mongo');
	}
	return db;
}
//This file is responsible for the connection to the database
