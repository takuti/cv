const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

const cleanContent = () => del(['dist/**/*']);

const compileSass = () =>
    src(['./styles/app.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest("dist/"));

const copyStaticFiles = () =>
    src(['./public/**/*']).pipe(dest("dist/"));

const copyFonts = () =>
    src(['./fonts/**/*']).pipe(dest("dist/fonts/"));

build = series(cleanContent, compileSass, copyFonts, copyStaticFiles)

const serve = () => {
    browserSync.init({
        files: ['dist/**/*'],
        server: {
            baseDir: 'dist/'
        },
        port: 3000,
        open: true,
    });

    watch('styles/**/*', compileSass);
    watch('public/**/*', copyStaticFiles);
};

exports.watch = series(build, serve);
exports.default = build;
