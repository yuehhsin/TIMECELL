module.exports = {
  plugins: [
    require('autoprefixer')({
      borwsers: ['>1%', 'last 5 versions', 'firefox>=45', 'iso>=8', 'safari>=8', 'ie>=10'],
    }),
  ],
};
