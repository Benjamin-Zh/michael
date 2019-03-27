const i = require('i18next');
const chalk = require('chalk');
const Listr = require('listr');
const prepareProjectDirectory = require('./tasks/prepareProjectDirectory');
const copyFiles = require('./tasks/copyFiles');
const initialization = require('./tasks/initialization');
const { takeItEasy } = require('../../utils');
const { br } = require('../../utils/txt');


async function execute(context) {
  const tasks = new Listr();

  tasks
    .add({
      title: `[1/3] ✈️ ${chalk.bold(i.t('execute.tasks.1.title'))}`,
      task: takeItEasy(prepareProjectDirectory, 500),
    })
    .add({
      title: `[2/3] 🌴 ${chalk.bold(i.t('execute.tasks.2.title'))}`,
      task: takeItEasy(copyFiles, 800),
    })
    .add({
      title: `[3/3] 🍹 ${chalk.bold(i.t('execute.tasks.3.title'))}`,
      task: initialization,
    });

  console.clear();
  console.log(chalk.green(`${i.t('execute.title')}${br}`));
  await tasks.run(context);
}

module.exports = execute;
