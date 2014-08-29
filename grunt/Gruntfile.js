var BUILD_MODE = 'ADVANCED_OPTIMIZATIONS'; // LIST, SCRIPT, WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS, DEBUG


module.exports = function (grunt) {
	var closureBuilderOptions = getClosureBuilderOptions(grunt);

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
			unsquadron: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"../bin/css/unsquadron.css": "../less/unsquadron/main.less"
				}
			}
		},

		jsdoc: {
			unsquadron: {
				src: [
					'../js/unsquadron/*.js',
					'../js/unsquadron/**/*.js',
					'!../js/unsquadron/net/*.js',
					'!../js/unsquadron/widgets/ArtSet.js'
				],

				dest: '../doc',
				options: {
					dest: '../doc'
				}
			}
		},

		closureBuilder: {
			options: closureBuilderOptions,

			unsquadron: {
				src: [
					'../js/google/closure-library/closure/goog/',
					'../js/google/closure-library/third_party/',
					'../js/qcurve/',
					'../js/unsquadron/',
					'../js/src/',
					'../js/greensock/v12/src/exports/'
				],

				dest: '../bin/js/unsquadron.' + BUILD_MODE.toLowerCase() + '.js'
			}
		},

		closureDepsWriter: {
			options: grunt.file.readJSON('json/closure_deps_writer/options.json'),

			unsquadron: {
				src: '../js/unsquadron/**/.js',
				dest: '../js/unsquadron/deps.js'
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

			unsquadron: {
				src: [
					(closureBuilderOptions['output_mode'] === 'compiled') ? 
						'../bin/js/unsquadron.' + BUILD_MODE.toLowerCase() + '.js' : 
						'../bin/js/unsquadron.script.js'
				],

				dest: '../bin/js/unsquadron.build.js'
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
				'!../bin/**',
				'!../**/alltests.js',
				'!../**/deps.js'
			],

			tasks: ['dev'],

			options: {
				interrupt: false
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
					src: ['../js/unsquadron/**/*.js']
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
		'closureDepsWriter:unsquadron'
	]);


	var dev_ = [];

	//dev_.push('closureDepsWriter:unsquadron');
	dev_.push('closureBuilder:unsquadron');
	dev_.push('less:unsquadron');
	dev_.push('concat:unsquadron');
	//dev_.push('jsdoc:unsquadron');
	
	grunt.registerTask('dev', dev_);

	grunt.registerTask('css', [
		'concat:css'
	]);
};

function getClosureBuilderDefaultOptions(grunt){
	var options = grunt.file.readJSON('json/closure_builder/options.json');
	
	options['inputs'] = [
		"../js/unsquadron/main.js"
	];

	options['namespaces'] = [
		"unsquadron.Main"
	];

	return options;
}

function getClosureBuilderOptions(grunt){
	var options = getClosureBuilderDefaultOptions(grunt);

	switch(BUILD_MODE){
		case 'LIST':
			options['output_mode'] = 'list';
			options['compilerOpts'] = {};
			break;
		case 'SCRIPT':
			options['output_mode'] = 'script';
			options['compilerOpts'] = {};
			break;
		case 'WHITESPACE_ONLY':
			options['output_mode'] = 'compiled';
			options['compilerOpts']['compilation_level'] = 'WHITESPACE_ONLY';
			break;
		case 'SIMPLE_OPTIMIZATIONS':
			options['output_mode'] = 'compiled';
			options['compilerOpts']['compilation_level'] = 'SIMPLE_OPTIMIZATIONS';
			break;
		case 'ADVANCED_OPTIMIZATIONS':
			options['output_mode'] = 'compiled';
			options['compilerOpts']['compilation_level'] = 'ADVANCED_OPTIMIZATIONS';
			break;
		case 'DEBUG':
			options['compilerOpts']['debug'] = true;
			options['output_mode'] = 'compiled';
			options['compilerOpts']['compilation_level'] = 'ADVANCED_OPTIMIZATIONS';
			break;
	}

	options['compile'] = (options['output_mode'] === 'compiled');
	return options;
}
