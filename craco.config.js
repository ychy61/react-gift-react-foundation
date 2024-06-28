const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                context: 'src/assets/images',
                outputPath: 'static/media/',
                publicPath: 'static/media/',
                useRelativePaths: true,
              },
            },
          ],
        },
      ],
    },
  },
};
