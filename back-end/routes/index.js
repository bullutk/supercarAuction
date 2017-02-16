var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js')
var randtoken = require('rand-token');
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

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
			var insertUserQuery = "INSERT INTO users (userName, password, realName, email) VALUES " +
				"(?, ?, ?, ?)";
			connection.query(insertUserQuery,[req.body.username,bcrypt.hashSync(req.body.password),req.body.name,req.body.email],(error2,results2)=>{
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

//Login Route
router.post('/login', (req,res,next)=>{
	var username = req.body.username;
	var password = req.body.password;
	var findUserQuery = "select * from users where username = ?";
	connection.query(findUserQuery,[username], (error,results)=>{
		if(error)throw error;
		if(results.length === 0){
			res.json({
				msg: "badUsername"
			});
		}else {
			// this is a valid username because results.length > 0
			checkHash = bcrypt.compareSync(password, results[0].password);
			// console.log("$$$$")
			// console.log(checkHash)
			// console.log("$$$$")
			if(checkHash === false){
				res.json({
					msg: "badPassword"
				})
			}else{
				var token = randtoken.uid(40);
				insertToken = "UPDATE users SET token=?, tokenExp=DATE_ADD(NOW(), INTERVAL 1 HOUR) "+
					"WHERE username=?";
				connection.query(insertToken, [token, username], (error, results)=>{
					console.log(token);
					res.json({
						msg: "foundUser",
						token: token
					});
				});
			}
		}
	});
});

module.exports = router;
























