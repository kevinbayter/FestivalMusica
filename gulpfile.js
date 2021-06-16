    const {
        series,
        src,
        dest,
        watch, parrallel
    } = require('gulp');
    const sass = require('gulp-sass');
    const imagemin = require('gulp-imagemin');
    const notify = require('gulp-notify');


    function css() {
        return src('src/scss/app.scss')
            .pipe(sass({
                outputStyle: 'compact'
            }))
            .pipe(dest('./build/css'))
    }

    function imagenes() {
        return src('src/img/**/*')
            .pipe(imagemin())
            .pipe(dest('./build/img'))
            .pipe(notify({
                message: 'Imagen minificada'
            }));
    }

    function watchArchivos() {
        watch('src/scss/**/*.scss', css); /*  doble ** quiere decir todos los archivos con esa extension */
    }

    exports.css = css;
    exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
    
exports.defaults = series(css, imagenes, watchArchivos);