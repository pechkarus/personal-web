var express = require('express');
var nconf = require('nconf');
var async = require('async');

var personal = require("../lib/buckets/personalBucket");
var professional = require("../lib/buckets/professionalBucket");


var router = express.Router();

nconf.file('secret.json');

/* GET home page. */
router.get('/', function(req, res) {
	async.parallel(
		[personal.populateBucket, professional.populateBucket],
		function (err, data) {
			
          res.render('index', { personalBucket: data[0], professionalBucket: data[1] });		
	    }
	);
});

module.exports = router;
