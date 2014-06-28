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
        src: './src/lottery.js',
        dest: './build/lottery.min.js'
      }
    },
    coffee: {
      compile: {
        src: './src/lottery.coffee',
        dest: './build/lottery.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
