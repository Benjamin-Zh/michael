const path = require('path');
const glob = require('glob');
const { promisify } = require('util');


async function get() {
  const pattern = `${__dirname}/*-*.js`;
  const files = await promisify(glob)(pattern);
  const resources = {};

  files.forEach((file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const resource = require(file);
    const lang = path.basename(file, '.js');

    resources[lang] = resource;
  });

  return resources;
}

module.exports = { get };
