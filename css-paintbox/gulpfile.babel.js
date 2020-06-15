import gulp from "gulp";
const del = require("del");
//삭제 기능을 추가함.

import sass from "gulp-sass";
// sass를 css로 컴파일해줌.
import minify from "gulp-csso";
//css를 축소한다.

import autoprefixer from "gulp-autoprefixer";
//구문을 분석해 vendor-prefixed css속성을 자동으로 추가해줌.

sass.compiler = require("node-sass");

const routes = {
  css: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss",
    dest: "dest/css",
  },
};
const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));
const watch = () => {
  gulp.watch(routes.css.watch, styles);
};
const clean = () => del(["dest/"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);
