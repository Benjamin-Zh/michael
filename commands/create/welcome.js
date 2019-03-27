const i = require('i18next');
const figlet = require('figlet');
const chalk = require('chalk');
const { promisify } = require('util');
const { version } = require('../../package');
const { br } = require('../../utils/txt');


async function welcome() {
  console.log(await promisify(figlet.text)('Michael.'));
  console.log(`v${version}`);
  console.log(chalk.green.bold(i.t('welcome.slogan')) + br);
}

module.exports = welcome;
