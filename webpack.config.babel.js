const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { NODE_ENV, ANALYZE } = process.env;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
const extractTextPlugin = new ExtractTextPlugin('styles.css');

const cssLoader = isProd
  ? {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    })
  }
  : {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      }
    ]
  };

const plugins = [];

if (ANALYZE) {
  plugins.push(bundleAnalyzerPlugin);
}

if (isProd) {
  plugins.push(extractTextPlugin);
}

module.exports = ({ isNode }) => {
  let filename;

  if (isDev) {
    filename = '[name].bundle.js';
  } else if (isNode) {
    filename = 'static.[chunkHash:8].js';
  } else if (!isNode && !isDev) {
    filename = '[name].[chunkHash:8].js';
  }

  return {
    entry: './src/index.js',
    output: {
      filename,
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: isNode ? 'umd' : undefined,
      publicPath: '/',
    },
    target: isNode ? 'node' : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        cssLoader,
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
        }
      }),
      ...plugins,
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 9000,
      compress: true,
      contentBase: path.join(__dirname, 'dist'),
    }
  };
};
