// Include gulp

var gulp = require('gulp');

// Include Our Plugins

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var inject = require('gulp-inject');
var watch = require('gulp-watch');


// PASTAS DE PROCESSAMENTO SRC

var paths = {

src: 'src',

srcINC:'src/includes/',

srcPHP: 'src/',

srcCSS:'src/css',

srcSCSS: 'src/scss/',

srcJS: 'src/js/',

// PASTAS DE PROCESSAMENTO TMP

tmp: 'tmp',

tmpINC:'tmp/includes/',

tmpPHP: 'tmp/',

tmpCSS: 'tmp/css/',

tmpJS: 'tmp/js/',

tmpASS:'tmp/assets/'

};

// VERIFICAR ERROS

gulp.task('lint', function() {

return gulp.src(paths.srcJS + '*.js')

.pipe(jshint())

.pipe(jshint.reporter('default'));

});

// COMPILAR O SASS PARA CSS

gulp.task('sass', function() {

return gulp.src(paths.srcSCSS + 'stylesheet.scss')

.pipe(sass())

.pipe(cleanCSS())

.pipe(gulp.dest(paths.srcCSS))

.pipe(gulp.dest(paths.tmpCSS));

});

// LIMPAR O HTML

gulp.task('htmlClean', function () {

return gulp.src(paths.srcPHP + '*.php')
       //gulp.src(paths.src)
.pipe(htmlclean())

.pipe(gulp.dest(paths.tmpPHP));

});

// INCLUDES EM PHP
gulp.task('includes', function(){
    return gulp.src(paths.srcINC + '*.php')

    .pipe(htmlclean())
    .pipe(gulp.dest(paths.tmpINC));
})

// CONCATENAR E MINIFICAR O JAVASCRIPT

gulp.task('scripts', function() {

return gulp.src(paths.srcJS + '*.js')

.pipe(concat('script.js'))

// .pipe(uglify())

.pipe(gulp.dest(paths.tmpJS));

});

// LIMPAR TODOS OS ASSETS

gulp.task('assets',function(){

return gulp.src('./src/assets/*/*')

.pipe(gulp.dest(paths.tmpASS));

});

// OBSERVAR QUALQUER MUDANÇA E ALTERAR

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', ['sass']);
});

// FUNÇÃO DEFAULT

gulp.task('default', ['watch', 'assets']);
