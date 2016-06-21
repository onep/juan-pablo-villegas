# Load all required libraries.
_          = require 'lodash'
gulp       = require 'gulp'
plumber    = require 'gulp-plumber'
compass    = require 'gulp-compass'
cleanCSS  = require 'gulp-clean-css'
ts         = require 'gulp-typescript'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'
gutil      = require 'gulp-util'
sourcemaps = require 'gulp-sourcemaps'
tsify      = require 'tsify'
uglify     = require 'gulp-uglify'
modernizr  = require 'gulp-modernizr'
concat     = require 'gulp-concat'
rename     = require 'gulp-rename'
walkSync   = require 'walk-sync'
debug  = require 'gulp-debug'
browserifyInc = require 'browserify-incremental'
modernizrJson = require('./modernizr.json')

theme = 'themes/juan-pablo-villegas/static'
paths =
  sass: theme + '/sass/**/*.{sass|scss}'
  ts:   theme + '/ts/**/*.ts'
  css:  theme + '/css'
  js:   theme + '/js'
  bundleName:   'bundle.js'

moduleImports = _.map([
  'jquery/dist/jquery.js'
  'sticky-kit/dist/sticky-kit.js'
  'ismobilejs/isMobile.js'
  'enquire.js/dist/enquire.js'
  'pre-loader/pre-loader.js'
  'object-fit-images/dist/ofi.browser.js'
], (str) -> "node_modules/" + str)

localImports = _.map([
  'modernizr.js'
  'bundle.js'
], (str) -> paths.js + "/" + str)

customOpts = {
  entries: [theme + '/ts/app.ts']
  debug: true
  cache: {}
  packageCache: {}
}

bIncOpts = _.assign({}, browserifyInc.args, customOpts)


gulp.task 'browserify', () ->
  b = browserifyInc(browserify(bIncOpts), './browserify-cache.json')

  walkSync('typings').forEach (file) ->
    if (file.match(/\.d\.ts$/))
      b.add("typings/" + file)

  return b
    .plugin tsify
    .bundle()
    .on 'error', (err) ->
      gutil.log(gutil.colors.red('Browserify error:'), err.message)
      gutil.beep()
      @emit 'end'
    .pipe source(paths.bundleName)
    .pipe gulp.dest(paths.js)

gulp.task 'modernizr', ->
  gulp.src '*.js'
    .pipe modernizr(modernizrJson)
    .pipe gulp.dest(paths.js)


gulp.task 'concat', ['browserify'], ->
  arr = [moduleImports..., localImports...]
  # console.log arr
  gulp.src arr
    .pipe concat('concat.js')
    .pipe buffer()
    .pipe sourcemaps.init({loadmaps: true})
    .pipe uglify()
    .on('error', gutil.log.bind(gutil, 'Uglify error:'))
    .pipe sourcemaps.write('.')
    .pipe gulp.dest(paths.js)


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
    .on('error', gutil.log.bind(gutil, 'Compass error:'))
    .pipe gulp.dest paths.css


gulp.task 'js', ['browserify', 'concat']

gulp.task 'watch', ->
  gulp.watch theme + '/sass/**/*.{sass,scss}', ['compass']
  gulp.watch theme + '/ts/**/*.ts', ['js']
  gulp.watch 'modernizr.json', ['modernizr', 'js']

gulp.task 'default', ['compass', 'js', 'watch']
gulp.task 'build', ['compass', 'js']