const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // 'custom-elements-es5-adapter': ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter'],
    // 'webcomponents-loader': ['@webcomponents/webcomponentsjs/webcomponents-loader'],
    // vendor: ['./src/vendor'],
    psumancomp1: [
        './src/myapp1'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib')
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
};
