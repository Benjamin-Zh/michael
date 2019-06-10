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
  COMMON: [
    '@guys/william',
    '@babel/runtime',
    'core-js',
  ],
  [FRAMEWORKS.REACT]: [
    'react',
    'react-dom',
    '@guys/babel-preset-react',
    '@guys/eslint-config-react',
  ],
  [FRAMEWORKS.VUE]: [
    'vue',
    '@guys/babel-preset-common',
    '@guys/eslint-config-common',
  ],
  [FRAMEWORKS.PLAIN]: [
    '@guys/babel-preset-common',
    '@guys/eslint-config-common',
  ],
};

module.exports = {
  FRAMEWORKS,
  APP_MODE,
  CONFLICT_RESOLUTION,
  DEPS,
};
