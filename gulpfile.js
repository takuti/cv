const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

const destDir = 'public/'

const compileSass = () =>
    src(['./scss/app.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest(destDir));

const serve = () => {
    browserSync.init({
        files: [destDir + '**/*'],
        server: {
            baseDir: destDir
        },
        port: 3000,
        open: true,
    });

    watch('scss/**/*', compileSass);
};

exports.watch = series(compileSass, serve);
exports.default = compileSass;
