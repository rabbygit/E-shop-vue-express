const path = require('path');

module.exports = {
  // outputDir: path.resolve(__dirname, '../server/public'),
  //target: 'https://e-shop-134.herokuapp.com'  http://localhost:3000

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://e-shop-134.herokuapp.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '.+?(?=/api)': '',
  //       },
  //     },
  //   },
  // },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });
  },
};
