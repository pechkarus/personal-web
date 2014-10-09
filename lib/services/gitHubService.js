var GitHubApi = require("node-github");
var nconf = require('nconf');

var serviceName = "github";

var gitHub = new GitHubApi({
	version: "3.0.0", 
	debug: false, 
	protocol: "https", 
	pathPrefix: "/api/v3"
});

function getEntities(callback){
	var gitHubUserName = nconf.get("gitHubUserName");
	
	gitHub.events.getFromUser({
		user: gitHubUserName,
	}, function(err, data){ 
		if(err){
			callback(err, null);
		} else {
		  var i, length, transformedData;			
		  transformedData = [];
		  for(i = 0, length = data.length; i < length; i++){
			  transformedData.push({ 
				  template: serviceName,
				  image: "/images/github.png",
				  title: data[i].type,
				  details: data[i].repo.name, 
					url: data[i].repo.url
			  });
		  }
		
      callback(null, transformedData);
	  }
	});
}

module.exports.getEntities = getEntities;
module.exports.name = serviceName;
module.exports.template = {
	name: serviceName,
	body: ""
};
