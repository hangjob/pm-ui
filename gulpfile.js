const gulp = require('gulp')
const less = require('gulp-less') //采用less的默认方式处理less产出css
const concat = require('gulp-concat') //拼接成一个文件，并命名为style.css
const rename = require('gulp-rename') //重命名为style.min.css
const sourcemaps = require('gulp-sourcemaps')
const replace = require('gulp-replace')

// 解决 https://www.coder.work/article/7097780
const LessPluginAutoPrefix = require('less-plugin-autoprefix')
const autoprefix = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] })

// 处理less文件
gulp.task('less', function () {
    return gulp.src('./packages/style/index.less') //待处理的目标目录下的所有less文件
        .pipe(less({
            plugins: [autoprefix],
        })).pipe(sourcemaps.init()).pipe(concat('style.css')).pipe(rename({
            suffix: '',
        })).pipe(gulp.dest('./lib/css')) //输出到“./dist/css”路径
})

// 转换Rem
gulp.task('pxToRem', function () {
    return gulp.src('./lib/css/*.css')
        .pipe(replace(/(\d+)px/g, function (match, p1) {
            return Number(p1) / 750 + 'rem'
        })).pipe(gulp.dest('./lib/css'))//将会在new下生成替换好的css文件
})

// 重新命名 - 为index
gulp.task('renameIndex', function () {
    return gulp.src('./lib/*.js').pipe(rename(function (path) {
        if (path.basename === 'pm-ui.umd'){
            path.basename = 'index'
        }
    })).pipe(gulp.dest('./lib'))
})

gulp.task('style', gulp.series('less','renameIndex'))

