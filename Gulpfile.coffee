# Load all required libraries.
gulp       = require 'gulp'
plumber    = require 'gulp-plumber'
compass    = require 'gulp-compass'
minifyCSS  = require 'gulp-minify-css'
ts         = require 'gulp-typescript'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'
gutil      = require 'gulp-util'
sourcemaps = require 'gulp-sourcemaps'
tsify      = require 'tsify'
uglify     = require 'gulp-uglify'
# assign     = require 'lodash.assign'
# watchify   = require 'watchify'
# browserifyInc = require 'browserify-incremental'

theme = 'themes/juan-pablo-villegas/static'
paths =
  sass: theme + '/sass/**/*.{sass|scss}'
  ts:   theme + '/ts/**/*.ts'
  css:  theme + '/css'
  js:   theme + '/js'
  bundleName:   'bundle.js'

customOpts = {
  entries: [theme + '/ts/app.ts']
  debug: true
  cache: {}
  packageCache: {}
  # poll: true
}

gulp.task 'browserify', () ->
  b = browserify(customOpts)
  return b
    .plugin tsify, {noImplicitAny: false}
    .bundle()
    .on 'error', gutil.log.bind(gutil, 'Browserify error:')
    .pipe source(paths.bundleName)
    .pipe buffer()
    .pipe sourcemaps.init({loadmaps: true})
    .pipe(uglify())
    .on('error', gutil.log.bind(gutil, 'Uglify error:'))
    .pipe sourcemaps.write('.')
    .pipe gulp.dest(paths.js)


# gulp.task 'watchify', () ->
#   opts = assign {}, watchify.args, customOpts
#   b    = watchify browserify(opts)
#   rebundle = () ->
#     return b
#       .plugin(tsify, {noImplicitAny: true})
#       .bundle()
#       .on 'error', gutil.log.bind(gutil, 'Browserify error:')
#       .pipe source(paths.bundleName)
#       .pipe buffer()
#       .pipe sourcemaps.init({loadmaps: true})
#       .pipe(uglify())
#       # .on('error', gutil.log.bind(gutil, 'Uglify error:'))
#       # .pipe(header(banner, { pkg : pkg } ))
#       .pipe sourcemaps.write(paths.js)
#       .pipe gulp.dest(paths.js)

#   b.on 'update', rebundle
#   b.on 'log', gutil.log
#   return rebundle()


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


gulp.task 'watch', ->
  gulp.watch theme + '/sass/**/*.{sass,scss}', ['compass']
  gulp.watch theme + '/ts/**/*.ts', ['browserify']


# gulp.task 'default', ['compass', 'browserify', 'watchify']
# gulp.task 'watch', ['compass', 'browserify', 'watch']
gulp.task 'default', ['compass', 'browserify', 'watch']
gulp.task 'build', ['compass', 'browserify']