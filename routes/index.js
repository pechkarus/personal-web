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
			var newData = data.reduce( function(previousValue, currentValue, index, array){
					for(var i = 0; i < currentValue.length; i++) {
						previousValue.push(currentValue[i]);
					}
					return previousValue;
			    }, []);	
			  console.log(" callback");
			  console.log(data);
	  		  res.render('index', { data: newData });		
	    }
	);
});

module.exports = router;
