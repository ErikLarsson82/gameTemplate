module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
      babel: {
          options: {
              sourceMap: true,
              presets: ['es2015']
          },
          dist: {
              files: [
                  {
                      expand: true,
                      cwd: '/',
                      src: ['*.js'],
                      dest: 'dist/'
                  }
              ]
          }
      },
      clean: ['dist']
  });

  grunt.registerTask('default', ['clean', 'babel']);
};