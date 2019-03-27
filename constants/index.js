const FRAMEWORKS = {
  REACT: 'react',
  VUE: 'vue',
  PLAIN: 'plain',
};

const APP_MODE = {
  SP: 'sp',
  MP: 'mp',
};

const CONFLICT_RESOLUTION = {
  MERGE: 'merge',
  OVERRIDE: 'override',
  EXIT: 'exit',
};

const DEPS = {
  COMMON: ['@guys/william', '@babel/runtime'],
  [FRAMEWORKS.REACT]: ['react', 'react-dom', '@guys/babel-preset-react'],
  [FRAMEWORKS.VUE]: ['vue', '@guys/babel-preset-common'],
  [FRAMEWORKS.PLAIN]: ['@guys/babel-preset-common'],
};

module.exports = {
  FRAMEWORKS,
  APP_MODE,
  CONFLICT_RESOLUTION,
  DEPS,
};
