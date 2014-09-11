var instagram = require("../services/instagramService");

module.exports.populateBucket = function(callback) {
	instagram.getEntities(callback);
}