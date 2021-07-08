const { series, src, dest, watch, parrallel } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

/* Funciones que compila sass */
const paths = {
  imagenes: "src/img/**/*",
  scss: "src/scss/**/*.scss",
};

function css() {
  return src(paths.scss)
    .pipe(
      sass({
        outputStyle: "compact",
      })
    )
    .pipe(dest("./build/css"));
}

function imagenes() {
  return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(
      notify({
        message: "Imagen Minificada",
      })
    );
}

function versionWebp() {
  return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(
      notify({
        message: "Version webp lista",
      })
    );
}

function watchArchivos() {
  watch(
    paths.scss,
    css
  ); /*  doble ** quiere decir todos los archivos con esa extension */
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, imagenes, versionWebp, watchArchivos);
