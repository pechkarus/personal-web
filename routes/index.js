var express = require('express');
var instagram = require('instagram-node-lib');
var nconf = require('nconf');

var router = express.Router();

nconf
  .file('secret.json')
  .env();

instagram.set('client_id', nconf.get('instagramClientId'));
instagram.set('client_secret', nconf.get('instagramClientSecret'));

/* GET home page. */
router.get('/', function(req, res) {
  instagram.users.recent({ 
	  user_id: 3256003,
	  complete: function(data){
		  res.render('index', { photos: data });
	  }
  });	  
});

module.exports = router;
