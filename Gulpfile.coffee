# Load all required libraries.
gulp       = require 'gulp'
plumber    = require 'gulp-plumber'
compass    = require 'gulp-compass'
minifyCSS  = require 'gulp-minify-css'
ts         = require 'gulp-typescript'

theme = 'themes/juan-pablo-villegas/static'
paths =
  sass: theme + '/sass/**/*.{sass|scss}'
  ts:   theme + '/ts/**/*.ts'
  css:  theme + '/css'
  js:   theme + '/js'

gulp.task 'compass', ->
  gulp.src paths.sass
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
    .pipe gulp.dest paths.css

gulp.task 'typescript', ->
  gulp.src paths.ts
    .pipe plumber
      errorHandler: (error) ->
        console.log error.message
        @emit 'end'
        return
    .pipe ts
      noImplicitAny: true
    .pipe gulp.dest paths.js

gulp.task 'watch', ->
  gulp.watch theme + '/sass/**/*.{sass,scss}', ['compass']
  gulp.watch paths.ts, ['typescript']

gulp.task 'default', ['compass', 'typescript']