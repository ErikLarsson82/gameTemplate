module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

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
                      cwd: '.',
                      src: ['app/*.js', 'lib/utils.js', 'lib/userInput.js'],
                      dest: 'dist/'
                  }
              ]
          }
      },
      clean: ['dist'],
      copy: {
        main: {
          files: [
            {
              expand: true, src: [
                'index.html',
                'favicon.png',
                'lib/require.js',
                'lib/underscore.js',
              ], dest: 'dist/', filter: 'isFile'}
          ]
        }
      }
  });

  grunt.registerTask('default', ['clean', 'copy', 'babel']);
};