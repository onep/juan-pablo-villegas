# Load all required libraries.
gulp       = require 'gulp'
plumber    = require 'gulp-plumber'
compass    = require 'gulp-compass'
minifyCSS  = require 'gulp-minify-css'
ts         = require 'gulp-typescript'

gulp.task 'compass', ->
  gulp.src 'themes/juan-pablo-villegas/static/sass/**/*.{sass|scss}'
    .pipe plumber
      errorHandler: (error) ->
        console.log error.message
        @emit 'end'
        return
    .pipe compass
      config_file: './config.rb'
      css: 'css'
      sass: 'sass'
    .on 'error', (err) ->
      return
    .pipe minifyCSS()
    .pipe gulp.dest 'themes/juan-pablo-villegas/static/css'

gulp.task 'typescript', ->
  gulp.src 'themes/juan-pablo-villegas/static/ts/**/*.ts'
    .pipe plumber
      errorHandler: (error) ->
        console.log error.message
        @emit 'end'
        return
    .pipe ts
      noImplicitAny: true
    .pipe gulp.dest 'themes/juan-pablo-villegas/static/js'

gulp.task 'default', ['compass', 'typescript']