var gitHub = require("../services/gitHubService");

module.exports.populateBucket = function(callback) {
	gitHub.getEntities(callback);
}