/* globals module, require */

module.exports = function(grunt) {

    "use strict";

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

            sass: {
                dist: {
                    options: {
                        style: 'compressed',
                        require: 'susy'
                    },
                    files: {
                        'css/global.css': ['sass/global.scss']
                    }
                }
            },

            cssmin: {
                combine: {
                    files: {
                        'css/global-min.css': ['css/global.css']
                    }
                }
            },

            shell: {
              jekyllServe: {
                command: "jekyll serve"
              },
              jekyllBuild: {
                command: "jekyll build"
              }
            },

            watch: {
                options: {
                    livereload: true,
                    //browserSync: true,
                },
                site: {
                  files: ['index.html'],
                  tasks: ['shell:jekyllBuild']
                },
                js: {
                    files: ['js/*.js'],
                    tasks: ['concat', 'uglify', 'shell:jekyllBuild']
                },
                css: {
                    files: ['sass/*.scss'],
                    tasks: ['sass', 'cssmin', 'shell:jekyllBuild']
                }
            },

            a11y: {
                dev: {
                    options: {
                        urls: ['_site/index.html']
                    }
                }
            },

            critical: {
                test: {
                    options: {
                        base: './',
                        css: [
                            '_site/css/global.css'
                        ],
                        width: 320,
                        height: 70
                    },
                    src: '_site/index.html',
                    dest: 'critical/index.html'
                }
            },

            htmlmin: {                                     // Task
              dist: {                                      // Target
                options: {                                 // Target options
                  removeComments: true,
                  collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                  'htmlmin/index.html': 'critical/index.html',     // 'destination': 'source'
                }
              }
            },

            browserSync: {
              default_options: {
                bsFiles: {
                    src: [
                       'css/*.css',
                       '*.html'
                    ]
                },
                options: {
                   watchTask: true,
                   server: {
                     baseDir: "_site"
                   }
                 }
               }
            }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    require("load-grunt-tasks")(grunt);

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'shell:jekyllBuild', 'browserSync', 'a11y', 'watch', 'htmlmin', 'critical']);

};
