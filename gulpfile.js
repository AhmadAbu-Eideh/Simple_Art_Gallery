const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const autoprefixer=require('gulp-autoprefixer');

function compileSass()
{
    return gulp.src('SASS/styles.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('CSS'));
}

gulp.task('build',compileSass);

gulp.task('watch',function(){
    gulp.watch('SASS/styles.scss',compileSass);
});