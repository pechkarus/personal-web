var instagram = require('instagram-node-lib');
var nconf = require('nconf');

var serviceName = "instagram";

function getEntities(callback){
	instagram.set('client_id', nconf.get('instagramClientId'));
	instagram.set('client_secret', nconf.get('instagramClientSecret'));
	
	instagram.users.recent({ 
	  user_id: nconf.get("instagramUserId"),
	  complete: function(data){
			var i, length, transformedData;			
			transformedData = [];
			for(i = 0, length = data.length; i < length; i++){
				transformedData.push({ 
					template: serviceName,
					image: data[i].images.thumbnail.url,
					title: data[i].caption ? data[i].caption.text : "",
					details: '',
					url: data[i].link
				});
			}
			
      callback(null, transformedData);
	  }, 
		error: function(errorMessage, errorObject, caller){
			console.log(errorMessage);
						console.log(errorObject);
			callback(errorMessage, null);
		}
	});	
}


module.exports.getEntities = getEntities;
module.exports.name = serviceName;
module.exports.template = {
	name: serviceName,
	body: ""
};


