const gulp = require("gulp")

// 转译Javascript
gulp.task("webpack", () => {
    const webpack = require("webpack-stream");
    gulp.src("./js/**/*.js")
        .pipe(webpack())
        .pipe(gulp.dest("../www/js"))
})

// 编译less
gulp.task("less", () => {
    const webpack = require("gulp-less");
    gulp.src("./less/**/*.less")
        .pipe(webpack())
        .pipe(gulp.dest("../www/css"))
})

gulp.task("default", ["webpack", "less"])
