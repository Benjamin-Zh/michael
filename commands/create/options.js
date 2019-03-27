const i = require('i18next');
const { FRAMEWORKS, APP_MODE, CONFLICT_RESOLUTION } = require('../../constants');


function make(raw) {
  return {
    get() {
      return Object
        .entries(raw)
        .map(([key, value]) => ({ name: i.t(value), value: key }));
    },
  };
}

module.exports.FRAMEWORKS = make({
  [FRAMEWORKS.REACT]: 'query.options.framework.react',
  [FRAMEWORKS.VUE]: 'query.options.framework.vue',
  [FRAMEWORKS.PLAIN]: 'query.options.framework.plain',
});

module.exports.APP_MODE = make({
  [APP_MODE.SP]: 'query.options.appMode.sp',
  [APP_MODE.MP]: 'query.options.appMode.mp',
});

module.exports.CONFLICT_RESOLUTION = make({
  [CONFLICT_RESOLUTION.OVERRIDE]: 'resolve.options.override',
  [CONFLICT_RESOLUTION.MERGE]: 'resolve.options.merge',
  [CONFLICT_RESOLUTION.EXIT]: 'resolve.options.exit',
});
