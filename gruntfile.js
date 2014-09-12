module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Project configuration.
	grunt.initConfig({
	  jshint: {
	    all: ['Gruntfile.js', 'app.js', 'lib/**/*.js', 'tests/**/*.js', 'public/javascript/**/*.js']
	  }
	});
};