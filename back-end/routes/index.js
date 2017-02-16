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

var bcrypt = require('bcrypt-nodejs');



/* GET top auctions. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = "SELECT * FROM vehicleStock limit 10";
	connection.query(auctionsQuery, (error,results,fields)=>{
		if (error) throw error;
		res.json(results);
	})
});

//Register route
router.post('/register', (req, res, next)=>{
	console.log(req.body.username)
	checkDupeUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(checkDupeUserQuery,[req.body.username],(error,results,fields)=>{
		if(results.length === 0){
			// Go ahead and register this person
			var insertUserQuery = "INSERT INTO users (userName, password) VALUES " +
				"(?, ?)";
			connection.query(insertUserQuery,[req.body.username,bcrypt.hashSync(req.body.password)],(error2,results2)=>{
				res.json({
					msg:"userInserted"
				});
			});
		}else{
			res.json({
				msg: "userNameTaken"
			})
		}
	})
});


module.exports = router;
