const path = require('path');

module.exports = {
  webpack: {
    // 임시로 alias 지정
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
};