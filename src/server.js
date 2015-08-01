var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
var path = require('path');

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'public'),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    cached: false,
    cachedAssets: false
  }
}).listen(config.port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:' + config.port);
});
