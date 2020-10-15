const mix = require("laravel-mix");
require("laravel-mix-alias");

mix.browserSync({
  open: false,
  proxy: "nginx"
});

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/js/assets/app.scss", "public/css")
  .alias({
    "@": "/resources/js",
    common: "/resources/js/app/common"
  })
  .options({
    extractVueStyles: true,
    globalVueStyles: "resources/js/assets/_variables.scss"
  });

if (mix.inProduction()) {
  mix.version();
}
