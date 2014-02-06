module.exports = function(grunt) {
  // Project configuration.
	grunt.initConfig({
		less: {
			development: {
				options: {
                    sourceMap: true,
                    sourceMapFilename: 'static/css/styles.css.map',
                    sourceMapRootpath: '/'
				},
				files: {
					"static/css/styles.css": "static/css/less/styles.less"
				}
			}
		},
		watch: {
			files: 'static/css/less/*.less',
			tasks: ['less']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task.
	grunt.registerTask('default', ['less', 'watch']);
};
