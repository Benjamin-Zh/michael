const POSTCSS = {
  plugins: {
    autoprefixer: {},
  },
};

const BROWSERSLIST = [
  '> 0.1%',
];

const ESLINT = {};

const WILLIAM = {
  globalStylePath: 'src/styles/global',
  cssModules: true,
  webpackConfig: {},
};

module.exports = {
  POSTCSS,
  ESLINT,
  BROWSERSLIST,
  WILLIAM,
};
