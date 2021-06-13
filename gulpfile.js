    const { series, src, dest, watch } = require('gulp');
    const sass = require('gulp-sass');

    function css() {
        return src('src/scss/app.scss')
        .pipe( sass({outputStyle:'compact'}))
        .pipe( dest('./build/css'))
    }

    function watchArchivos() {
    watch('src/scss/**/*.scss', css); /*  doble ** quiere decir todos los archivos con esa extension */
    }

exports.css = css;
exports.watchArchivos = watchArchivos;