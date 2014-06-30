module.exports = function(grunt) {
  grunt.registerTask('default', ['clean', 'coffee', 'jshint', 'uglify']);

  grunt.initConfig({
    clean: {
      it: {
        src: './build/*.js'
      }
    },
    jshint: {
      all: ['./build/*.js']
    },
    uglify: {
      build: {
        src: './build/lottery.js',
        dest: './build/lottery.min.js'
      }
    },
    coffee: {
      compile: {
        files: {
          './build/main.js' : './src/main.coffee',
          './build/lottery.js': './src/lottery.coffee'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
