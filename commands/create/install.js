const i = require('i18next');
const chalk = require('chalk');
const execa = require('execa');
const { br } = require('../../utils/txt');


async function install(ctx) {
  const { projectPath } = ctx;

  console.clear();
  console.log(chalk.green(i.t('install.title')));
  console.log(chalk.gray(`${i.t('install.notice')}${br(2)}`));

  await execa('npm', ['install'], { cwd: projectPath, stdio: 'inherit' });
}

module.exports = install;
