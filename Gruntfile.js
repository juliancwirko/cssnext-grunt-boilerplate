'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'app',
		dist: 'dist',

		postcss: {
			options: {
				map: true,
				processors: [
					require('postcss-import')(),
					require('postcss-cssnext')({
						browsers: 'last 2 versions'
					}),
					require('postcss-reporter')()
				]
			},
			dist: {
				src: '<%= app %>/postcss/**/*.css',
				dest: '<%= app %>/css/app.css'
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= app %>/js/**/*.js'
			]
		},

		clean: {
			dist: {
				src: ['<%= dist %>/*']
			},
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['fonts/**', '**/*.html', '!postcss/**', '!bower_components/**'],
					dest: '<%= dist %>/'
				}]
			},
		},

		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= app %>/images/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: '<%= dist %>/images/'
				}]
			}
		},

		uglify: {
			options: {
				preserveComments: /(?:^!|@(?:license|preserve|cc_on))/,
				mangle: false
			}
		},

		useminPrepare: {
			html: ['<%= app %>/index.html'],
			options: {
				dest: '<%= dist %>'
			}
		},

		usemin: {
			html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
			css: ['<%= dist %>/css/**/*.css'],
			options: {
				dirs: ['<%= dist %>']
			}
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['postcss']
			},
			postcss: {
				files: '<%= app %>/postcss/**/*.css',
				tasks: ['postcss']
			},
			assemble: {
				files: '<%= app %>/templates/**/*.hbs',
				tasks: ['assemble']
			}
		},

		browserSync: {
            app: {
                bsFiles: {
                    src : [
                        '<%= app %>/css/*.css',
                        '<%= app %>/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './<%= app %>',
                    port: 3000,
                    ui: {
                    	port: 3001
                    }
                }
            },
            dist: {
            	bsFiles: {
                    src : [
                        '<%= dist %>/css/*.css',
                        '<%= dist %>/*.html'
                    ]
                },
                options: {
                    server: './<%= dist %>',
                    port: 3002,
                    ui: {
                    	port: 3003
                    }
                }
            }
        },

		assemble: {
			options: {
				flatten: true,
				plugins: ['permalinks'],
				partials: ['<%= app %>/templates/partials/*.hbs'],
				layoutdir: '<%= app %>/templates/layouts/',
				data: ['<%= app %>/templates/data/*.{json,yml}']
			},
			pages: {
		        src: '<%= app %>/templates/pages/*.hbs',
        		dest: '<%= app %>/'
			}
		}

	});

	grunt.registerTask('default', ['assemble', 'postcss', 'browserSync:app', 'watch']);
	grunt.registerTask('validate-js', ['jshint']);
	grunt.registerTask('server-dist', ['browserSync:dist']);

	grunt.registerTask('publish', ['assemble', 'postcss', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin']);

};
