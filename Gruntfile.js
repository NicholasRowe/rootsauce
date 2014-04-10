module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Include sass for some magic css preprocessing...
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    // Watch any file changes and live reload them!
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      options: {
        livereload: true,
        }
    },

    // Here we can generate sprites...
    sprite:{
        all: {
            src: 'img/sprites/*.png',
            destImg: 'img/spritesheet.png',
            destCSS: 'scss/sprites.css'
        }
    },

  });


  // Load the grunt tasks from above...
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-spritesmith');


  // Once loaded, let's run the tasks!
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('default', ['sprite']);

}