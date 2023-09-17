//gulpプラグインの読み込み
const gulp = require("gulp");
//sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
//style.scssをタスクを作成する
//default:
gulp.task("default", ()  => {
  //style.scssファイルを監視
  return gulp.watch("css/style.scss", () => {
    ///style.scssファイルを取得
    return (
      gulp.src('css/style.scss')
      //pipeで1つ1つの処理を繋げる
      //sassのコンパイルの実行
      .pipe(
        sass({
          outputStyle: "expanded",
        })
        .on("error", sass.logError)
      )
      //cssフォルダー以下に保存
      .pipe(gulp.dest("css"))
    );
  });
});
