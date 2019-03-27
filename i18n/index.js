const i18next = require('i18next');
const resources = require('./resources');


async function init(lng = 'en-US') {
  return i18next.init({
    lng,
    fallbackLng: 'en-US',
    resources: await resources.get(),
  });
}

module.exports = { init };
