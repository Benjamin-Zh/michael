const i = require('i18next');
const chalk = require('chalk');
const { br, ul } = require('../../utils/txt');


function complete({ projectName }) {
  console.clear();
  console.log(chalk.green.bold(i.t('complete.title')));
  console.log(chalk.green(`${i.t('complete.notice')}${br}`));
  console.log(i.t('complete.list.preface'));
  console.log(ul([
    `cd ${projectName}`,
    'npm run serve',
  ], { withDot: false }));
  console.log(`${i.t('complete.list.appendix')}${br}`);
  console.log(chalk.blue(`${i.t('complete.enjoy')}${br}`));
}

module.exports = complete;
