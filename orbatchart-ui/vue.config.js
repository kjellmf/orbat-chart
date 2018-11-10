const path = require('path');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'milsymbol': path.resolve(path.join(__dirname, 'node_modules', 'milsymbol')),
        'orbatchart': path.resolve(path.join(__dirname, '../packages/orbatchart/src', ))
      },
    },
  }
};
