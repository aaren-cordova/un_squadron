/**global module:false**/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: [
				'*/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ',
				'<%= grunt.template.today("yyyy-mm-dd") %>\n',
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>',
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;',
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> **/'
			].join('')
		},

		less: {
			s6: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					"../bin/css/variables.css": "../less/variables.less",
					"../bin/css/mixins.css": "../less/mixins.less",
					"../bin/css/main.css": "../less/main.less"
				}
			}
		},
		jsdoc: {
			s6: {
				src: [
					'../js/s6/*.js',
					'../js/s6/**/*.js',
					'!../js/s6/net/*.js',
					'!../js/s6/widgets/ArtSet.js'
				],

				dest: '../doc',
				options: {
					dest: '../doc'
				}
			}
		},

		closureBuilder: {
			options: grunt.file.readJSON('json/closure_builder/options.json'),

			s6: {
				src: [
					'../js/google/closure-library/closure/goog/',
					'../js/google/closure-library/third_party/',
					'../js/s6/',
					'../js/src/'//,
					//'../js/greensock/v12/src/exports/'
				],

				dest: '../bin/js/s6.min.js'
			}
		},

		closureDepsWriter: {
			options: grunt.file.readJSON('json/closure_deps_writer/options.json'),

			s6: {
				src: '../js/s6/**/.js',
				dest: '../js/s6/deps.js'
			}
		},

		concat: {
			options: {
				separator: ''
			},

			greensock:{
				src:[
					'../js/greensock/v12/src/uncompressed/base.js',
					'../js/greensock/v12/src/minified/TweenMax.min.js'
				],
				dest: '../js/greensock/v12/bin/uncompressed/out.js'
			},

			s6: {
				src: [
					'../bin/js/s6.min.js'
				],

				dest: '../bin/js/s6.concat.js'
			},

			css:{
				src: [
				],

				dest: ''
			}
		},

		watch: {
			styles: {
				files: ['../less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			},

			files: [
				'../js/**/*.js', 
				'!../js/bin/**.js',
				'!../js/**/alltests.js',
				'!../js/**/deps.js'
			],

			tasks: ['dev'],

			options: {
				interrupt: true
			}
		},

		closureLint: {
			app:{
				closureLinterPath : '../js/google/closure_linter/2.3.9/closure_linter',

				src: ['../js/**/*.js'],
				options: {
					stdout: true,
					strict: true
				}
			}
		},

		jshint: {
			all:{
				files: {
					src: ['../js/s6/**/*.js']
				}
			},

			options: grunt.file.readJSON('json/jshint/options.json')
		}
	});

	grunt.loadNpmTasks('grunt-closure-tools');
	grunt.loadNpmTasks('grunt-closure-linter');
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-jsdoc');

	grunt.registerTask('greensock', [
		'concat:greensock',
		'uglify:greensock'
	]);

	grunt.registerTask('write_deps', [
		'closureDepsWriter:s6'
	]);


	var dev_ = [];
	//dev_.push('jshint');
	dev_.push('closureDepsWriter:s6');
	dev_.push('closureBuilder:s6');

	dev_.push('less:s6');
	dev_.push('concat:s6');

	dev_.push('jsdoc:s6');

	
	grunt.registerTask('dev', dev_);

	grunt.registerTask('css', [
		'concat:css'
	]);
};
