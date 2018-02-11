const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { NODE_ENV, ANALYZE } = process.env;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
const extractTextPlugin = new ExtractTextPlugin({
  filename: 'styles.css',
  allChunks: true,
});

const cssLoader = isProd
  ? {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: {
        loader: 'style-loader',
        options: {
          sourceMap: false,
          hmr: false,
        },
      },
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: false,
          },
        },
      ]
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
      path: path.resolve(process.cwd(), 'dist'),
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
    devtool: 'source-map',
    devServer: {
      port: 9000,
      compress: true,
      contentBase: path.join(__dirname, 'dist'),
    }
  };
};
