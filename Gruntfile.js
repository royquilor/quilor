module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for concatinating files goes here.
            concat: {   
                dist: {
                    src: [
                        'js/chapters.js',
                        'js/s.js'// All JS in the libs folder
                    ],
                    dest: 'js/build/production.js'
                }
            },
            uglify: {
                build: {
                    src: 'js/build/production.js',
                    dest: 'js/build/production.min.js'
                }
            },
            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'i/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'i/build/'
                    }]
                }
            },
            sass: {
                dist: {
                    options: {
                        style: 'compressed'
                    },
                    files: {
                        'c/build/global.css': 'c/global.scss'
                    }
                } 
            },
            cssmin: {
                combine: {
                    files: {
                        'c/build/global-min.css': ['c/normalize.css', 'c/s.css']
                    }
                }  
            },
            watch: {
                options: {
                    livereload: true,
                },
                scripts: {
                    files: ['js/*.js'],
                    tasks: ['concat', 'uglify'],
                    options: {
                        spawn: false,
                    },
                },
            css: {
                files: ['c/*.scss', 'c/*.css'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }    
        }    

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'imagemin', 'watch']);

};