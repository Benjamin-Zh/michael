const i = require('i18next');
const validateProjectName = require('validate-npm-package-name');
const { fatal } = require('../../utils/message');
const { br, ul } = require('../../utils/txt');


async function check({ projectName }) {
  const { validForNewPackages: valid, errors } = validateProjectName(projectName);

  if (!valid) {
    const message = i.t('check.fail', { projectName });
    const errorList = ul(errors);

    fatal(`${message}${br}${errorList}`);
    process.exit(1);
  }
}

module.exports = check;
