var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js')
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

connection.connect();

/* GET top auctions. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = "SELECT * FROM vehicleStock limit 10";
	connection.query(auctionsQuery, (error,results,fields)=>{
		if (error) throw error;
		res.json(results);
	})
});

module.exports = router;
