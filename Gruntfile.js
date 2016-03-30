/* globals module, require */

"use strict";

module.exports = function(grunt) {

    // 1. Where we tell Grunt we plan to use this plug-in.
    require("load-grunt-tasks")(grunt);

    // 2. All configuration goes here
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for concatinating files goes here.

            // uncss: {
            //     dist: {
            //         files: {
            //             'tidy/global-min.css': 'index.html'
            //         }
            //     }
            // },

            concat: {
                dist: {
                    src: [
                        'js/chapters.js',
                        'js/s.js',
                        'js/libs/scrollreveal.min.js'
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
                        'css/global.css': 'sass/global.scss'
                    }
                }
            },

            // processhtml: {
            //     dist: {
            //         files: {
            //             'tidy/index.html': 'index.html'
            //         }
            //     }
            // },

            cssmin: {
                combine: {
                    files: {
                        'css/global-min.css': 'css/global.css'
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


    	    // pageres: {
            //   screenshot: {
            // 	options: {
            //       urls: 'awwesome.com',
            //       sizes: ['1200x800', '800x600', '320x658'],
            //       dest: 'dist',
            //       crop: true
            //     }
            //   }
	        // },

            // breakshots: {
            //     options: {},
            //         files: {
            //         'breakshots/': ['index.html']
            //     },
            // },


            // responsive_images: {
            //     dev: {
            //         options: {
            //             sizes: [{
            //                 width: 320,
            //                 quality: 100
            //             },{
            //                 name: 'medium',
            //                 width: 640,
            //                 quality: 100
            //             },{
            //                 name: "large",
            //                 width: 1024,
            //                 // suffix: "_x2",
            //                 quality: 100
            //             }]
            //         },
            //             files: [{
            //             expand: true,
            //             src: ['**/**/**/*.{jpg,gif,png}'],
            //             cwd: 'i/',
            //             dest: 'responsive'
            //         }]
            //     }
            // },

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
                        minify: true,
                        base: './',
                        css: [
                            '_site/css/global.css'
                        ],
                        width: 1400,
                        height: 900
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
                  'htmlmin/index.html': 'critical/index.html'     // 'destination': 'source'
                }
              }
            },

            // perfbudget: {
            //   default: {
            //     options: {
            //       url: 'http://quilor.com',
            //       key: 'A.9f24421884cf83340b2b18b8f2d7873a'
            //     }
            //   }
            // },

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

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("serve", [
        "shell:jekyllServe"
    ]);

    grunt.registerTask('default', [
        'concat',
        'uglify',
        'sass',
        'cssmin',
	    // 'pageres',
        // 'breakshots',
        // 'responsive_images',
        // 'uncss',
        // 'processhtml',
        // 'perfbudget',
        'shell:jekyllBuild',
        'browserSync',
        'a11y',
        'watch',
        'htmlmin',
        'critical'
    ]);

};
