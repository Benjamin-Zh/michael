/* eslint-disable no-param-reassign */
const i = require('i18next');
const path = require('path');
const fsx = require('fs-extra');
const { TEMPLATE_ROOT_PATH } = require('../../../constants/paths');


async function copyFiles(ctx, task) {
  const { projectPath, options } = ctx;
  const templateSubPath = [options.framework, options.appMode]
    .filter(item => !!item)
    .join('/');
  const templatePath = path.resolve(TEMPLATE_ROOT_PATH, templateSubPath);

  task.output = i.t('execute.tasks.2.copy');
  await fsx.copy(templatePath, projectPath, { overwrite: true });
}

module.exports = copyFiles;
