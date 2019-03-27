/* eslint-disable no-param-reassign */
const i = require('i18next');
const fs = require('fs');
const path = require('path');
const Configstore = require('configstore');
const latestVersion = require('latest-version');
const { promisify } = require('util');
const { DEPS } = require('../../../constants');
const { takeItEasy } = require('../../../utils');
const RC_FIELDS = require('../../../constants/rcFields');


async function initializePkgJSON(projectPath, projectName) {
  const pkgJSONPath = path.resolve(projectPath, 'package.json');
  const pkgJSONContent = { name: projectName, version: '0.1.0' };

  await promisify(fs.writeFile)(pkgJSONPath, pkgJSONContent);
  const pkgJSON = new Configstore(
    projectName,
    pkgJSONContent,
    { configPath: pkgJSONPath },
  );

  pkgJSON.set({
    postcss: RC_FIELDS.POSTCSS,
    eslintConfig: RC_FIELDS.ESLINT,
    browserslist: RC_FIELDS.BROWSERSLIST,
  });

  return { pkgJSON };
}

async function initializeDeps(ctx) {
  const depList = [
    ...DEPS.COMMON,
    ...DEPS[ctx.options.framework],
  ];
  const deps = {};

  await Promise.all(depList.map(async (dep) => {
    deps[dep] = `^${await latestVersion(dep)}`;
  }));

  ctx.pkgJSON.set('dependencies', {
    ...deps,
    ...ctx.pkgJSON.get('dependencies'),
  });

  return { deps };
}

async function initializeBundlerConfig(ctx) {
  const { projectPath, options, pkgJSON } = ctx;
  const config = { ...RC_FIELDS.WILLIAM };

  config.appMode = options.appMode;
  fs.writeFileSync(
    path.resolve(projectPath, '.williamrc.json'),
    JSON.stringify(config, null, 2),
  );

  pkgJSON.set({
    scripts: {
      serve: 'william serve',
      build: 'william build',
    },
  });
}

async function initialization(ctx, task) {
  const { projectPath, projectName } = ctx;

  task.output = i.t('execute.tasks.3.package');
  ctx.assign(await takeItEasy(initializePkgJSON, 1000)(projectPath, projectName));

  task.output = i.t('execute.tasks.3.bundler');
  await initializeBundlerConfig(ctx);

  task.output = i.t('execute.tasks.3.dependencies');
  ctx.assign(await initializeDeps(ctx));
}

module.exports = initialization;
