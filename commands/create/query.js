const i = require('i18next');
const inquirer = require('inquirer');
const { br } = require('../../utils/txt');
const CONST = require('../../constants');
const OPTIONS = require('./options');


function queryFramework() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: i.t('query.questions.framework'),
      choices: OPTIONS.FRAMEWORKS.get(),
      default: CONST.FRAMEWORKS.REACT,
    },
  ]);
}

function queryAppMode({ framework }) {
  if (framework === CONST.FRAMEWORKS.PLAIN) return null;

  return inquirer.prompt([
    {
      type: 'list',
      name: 'appMode',
      message: i.t('query.questions.appMode'),
      choices: OPTIONS.APP_MODE.get(),
      default: CONST.APP_MODE.SP,
    },
  ]);
}

async function query(options) {
  console.log(`${i.t('query.introduce')}${br}`);

  options
    .assign(await queryFramework())
    .assign(await queryAppMode(options));

  return options;
}

module.exports = query;
