'use strict';


module.exports = function(grunt){

	grunt.initConfig({
	    protractor: {
	    	options: {
	    		configFile: "e2e.conf.js",
	    		keepAlive: false,
	    		noColor: false
	    	},
	    	auto: {
        		keepAlive: true,
        		options: {
          			args: {
            			seleniumPort: 4444
          			}
        		}
      		}
	    },
		watch:{
            self: {
                files: ['Gruntfile.js'],
                tasks: [
                	'protractor'
                ]
            },
            protractor: {
            	files: ['test/e2e/*.js'],
            	tasks: [
            		'protractor'
            	]
            }
		}
	});

	//Loads all Grunt task
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-protractor-runner');

	// Create tasks

	grunt.registerTask('default', ['watch']);

	grunt.registerTask('test', ['protractor']);

};
