var gulp = require("gulp");
var webpack = require("webpack-stream");
var path = require("path");

gulp.task("transpile+bundle", function() {
    gulp.src("./src").pipe(webpack({
        devtool: 'inline-sourcemap',
        entry: path.resolve(__dirname, 'src/main.js'),

        output: {
            path: path.resolve(__dirname, 'www'),
            filename: 'build.bundle.js',
        },

        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }]
        }

    })).pipe(gulp.dest("./www"))
});

gulp.task("move-assets", function() {
    gulp.src("./src/index.html").pipe(gulp.dest("./www"));
})

gulp.task('build', ["move-assets", "transpile+bundle"], function() {
    return 0;
});

gulp.task("default", ["build"]);