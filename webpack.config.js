var path = require('path');
var webpack = require('webpack');
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';
var plugins = [];
var entries = ['./src/app'];
var loaders = ['babel?stage=0'];

if (env === 'production') {
  plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ];
} else if (env === 'development') {
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ];

  entries.push('webpack-dev-server/client?http://0.0.0.0:' + port, 'webpack/hot/only-dev-server');
  loaders.unshift('react-hot');
}

module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'build/assets'),
    filename: 'bundle.js',
    publicPath: 'assets/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.yml']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: loaders,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.less$/,
      loader: ['style!css!less']
    }, {
      test: /\.gif/,
      loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.png/,
      loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
      test: /\.svg/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }],
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', exclude: /build|data|node_modules/},
    ]
  },
  eslint: {configFile: '.eslintrc'},
  port: port
};
