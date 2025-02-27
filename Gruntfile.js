module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        output: {
          comments: /license/,
        },
        compress: {
          drop_console: true,
        },
      },
      build: {
        src: 'src/eventsource.js',
        dest: 'src/eventsource.min.js',
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
