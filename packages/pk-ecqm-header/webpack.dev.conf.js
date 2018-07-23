const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    pkecqmheader: [
        './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
	"exclude": [
          // instead of /\/node_modules\//
          path.join(process.cwd(), 'node_modules'), '/node_modules'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: true, root: path.resolve(__dirname) }),
    new CopyWebpackPlugin([
      {
        from: path.join(
          path.resolve(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/'),
          '*.js'
        ),
        to: './webcomponentsjs',
        flatten: true
      }
    ]),    
    new CopyWebpackPlugin(['index.html']),
    new CopyWebpackPlugin(['../../node_modules/web-animations-js/web-animations-next-lite.min.js']),
  ]
};
