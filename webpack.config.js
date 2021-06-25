const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  output: {
    path: path.resolve(__dirname, 'view/scripts'),
    filename: 'index.bundle.tsx'
  },
  devServer: {
    contentBase: path.join(__dirname, "misc"),
    compress: true,
    port: 2000
  },
  devtool: 'eval-source-map',
  mode: 'development',
};