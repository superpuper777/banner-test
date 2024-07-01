import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/locales', to: 'assets/locales' },
        { from: 'src/assets/images/f1', to: 'assets/images' },
        { from: 'src/assets/images/f2', to: 'assets/images' },
        { from: 'src/assets/images/f3', to: 'assets/images' },
        { from: 'src/assets/images/cross', to: 'assets/images' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.use((req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const isAssetRequest =
          url.pathname.startsWith('/assets/') ||
          url.pathname.startsWith('/locales/') ||
          url.pathname.endsWith('.js') ||
          url.pathname.endsWith('.ico');

        if (!isAssetRequest && !url.searchParams.get('lang')) {
          const redirectUrl = new URL(req.url, `http://${req.headers.host}`);
          redirectUrl.searchParams.set('lang', 'en');
          res.writeHead(302, { Location: redirectUrl.toString() });
          res.end();
        } else {
          next();
        }
      });

      return middlewares;
    },
  },
};
