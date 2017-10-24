var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var minify = require('gulp-minify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var wiredep = require('wiredep').stream;
var gulpBowerFiles = require('gulp-bower-files');



gulp.task('clean-js',function(){
    return gulp.src('./public/assets/js/*.min.js')
    .pipe(clean());
});

gulp.task('clean-css',function(){
    return gulp.src('./public/assets/css/*.min.css')
    .pipe(clean());
});

gulp.task('styles',['clean-css'],function(){
        return gulp.src('./assets/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('js',['clean-js'],function(){
    return gulp.src(
        [
            './assets/js/*.js'
        ]
    )
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('html',function(){
    return gulp.src(['index.html','about.html'])
    .pipe(wiredep({
        fileTypes: {
            html: {
                replace: {
                    js: '<script src="{{filePath}}"></script>'
                }
            }
        }
    }))
    .pipe(inject(gulp.src([
        './public/assets/css/*.css',
        './public/assets/app/*.js',
        './public/assets/app/controller/**/*.js',
        './public/assets/js/*.js',
    ], {read: false}),{ignorePath:'public'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function(){
    gulp.watch(['index.html','about.html'],['html']);
    gulp.watch('./assets/js/*.js',['js']);
    gulp.watch('./assets/scss/*.scss',['styles','slide-css']);
    gulp.watch('./assets/app/*.js',['angular-js']);
});

gulp.task("bower-files", function(){
   gulpBowerFiles().pipe(gulp.dest("./public/vendor"));
});

// gulp.task('icon',function(){
//     return gulp.src('assets/images/icons/favicon.ico')
//     .pipe(gulp.dest('./public/'));
// });

gulp.task('image',function(){
    return gulp.src('assets/images/**/*')
    .pipe(gulp.dest('./public/assets/images'));
});

gulp.task('font',function(){
    return gulp.src('assets/fonts/*')
    .pipe(gulp.dest('./public/assets/fonts'));
});


gulp.task('angular-js',['clean-angular-js'],function(){
    return gulp.src(
        [
            './assets/app/*.js'
        ]
    )
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/app/'));
});

gulp.task('clean-angular-js',function(){
    return gulp.src('./public/assets/app/*.min.js',{read: false})
    .pipe(clean());
});

gulp.task('slide-css',function(){
    return gulp.src(
        [
            './assets/css/slides.min.css'
        ]
    )
    .pipe(gulp.dest('./public/assets/css/'));
});
gulp.task('slide-js',function(){
    return gulp.src(
        [
            './assets/slides/**/*'
        ]
    )
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/slides/'));
});
gulp.task('slide-images',function(){
    return gulp.src(
        [
            './assets/img/**/*'
        ]
    )
    .pipe(gulp.dest('./public/assets/img/'));
});
gulp.task('slide-svg',function(){
    return gulp.src(
        [
            './assets/svg/**/*'
        ]
    )
    .pipe(gulp.dest('./public/assets/svg/'));
});


gulp.task('default',['bower-files','styles','js','angular-js','slide-css','slide-js','slide-images','slide-svg','html','watch']);