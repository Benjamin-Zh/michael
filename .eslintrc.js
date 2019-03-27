module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
  },

  rules: {

    // 允许 devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      { "devDependencies": true }
    ],

    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,

  },
};
