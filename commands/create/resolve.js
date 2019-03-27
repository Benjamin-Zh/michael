const i = require('i18next');
const fs = require('fs');
const fsx = require('fs-extra');
const inquirer = require('inquirer');
const { promisify } = require('util');
const message = require('../../utils/message');
const CONST = require('../../constants');
const OPTIONS = require('./options');


const AVAILABILITY_STATUS = {
  OK: Symbol('ok'),
  FILE_EXISTS: Symbol('file exists'),
  DIRECTORY_NOT_EMPTY: Symbol('directory not empty'),
};

async function checkAvailability(path) {
  const exists = await promisify(fsx.pathExists)(path);

  if (!exists) return AVAILABILITY_STATUS.OK;

  const stat = await promisify(fs.stat)(path);

  if (!stat.isDirectory()) return AVAILABILITY_STATUS.FILE_EXISTS;

  const files = await promisify(fs.readdir)(path);

  return files.length
    ? AVAILABILITY_STATUS.DIRECTORY_NOT_EMPTY
    : AVAILABILITY_STATUS.OK;
}

function queryAction() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'conflictResolution',
      message: i.t('resolve.question'),
      choices: OPTIONS.CONFLICT_RESOLUTION.get(),
      default: CONST.CONFLICT_RESOLUTION.OVERRIDE,
    },
  ]);
}

async function resolve({ projectPath: path, options }) {
  const availability = await checkAvailability(path);

  if (availability !== AVAILABILITY_STATUS.OK) {
    const messages = {
      [AVAILABILITY_STATUS.FILE_EXISTS]: 'resolve.message.fileExists',
      [AVAILABILITY_STATUS.DIRECTORY_NOT_EMPTY]: 'resolve.message.directoryNotEmpty',
    };

    message.warn(i.t(messages[availability], { path }));
    options.assign(await queryAction(availability));

    if (options.conflictResolution === CONST.CONFLICT_RESOLUTION.EXIT) {
      process.exit(0);
    }

    console.clear();
  }
}

module.exports = resolve;
