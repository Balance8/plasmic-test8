
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['ru5Le9c5MJpf4FoZoJhfNR'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  