// webpack.mix.js

let mix = require('laravel-mix');

mix.js('Wireframe/src/app.js', 'Wireframe/dist').setPublicPath('Wireframe/dist');