/* eslint-disable no-param-reassign */
const i = require('i18next');
const fsx = require('fs-extra');
const CONST = require('../../../constants');


async function prepareProjectDirectory(ctx, task) {
  const { projectPath, options } = ctx;

  if (options.conflictResolution === CONST.CONFLICT_RESOLUTION.OVERRIDE) {
    task.output = i.t('execute.tasks.1.empty');
    await fsx.emptyDir(projectPath);
  } else {
    task.output = i.t('execute.tasks.1.create');
    await fsx.ensureDir(projectPath);
  }
}

module.exports = prepareProjectDirectory;
