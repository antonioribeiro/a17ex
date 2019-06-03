/*
 |--------------------------------------------------------------------------
 | Laravel Mix
 |--------------------------------------------------------------------------
 */
const mix = require('laravel-mix')

require('laravel-mix-purgecss')

// Move mix-manifest.json to public/site so it doesn't conflicts
// with site manifest
global.Mix.manifest.path = function() {
    return path.join('public/site', this.name)
}

mix.js('resources/js/app.js', 'public/site/js')
    .sass('resources/sass/app.scss', 'public/site/css')
    // .purgeCss() // this is purging too much code
    .version()

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */

const LiveReloadPlugin = require('webpack-livereload-plugin')

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()],
})
