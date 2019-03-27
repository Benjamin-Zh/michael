const path = require('path');
const execa = require('execa');
const fsx = require('fs-extra');
const { TEMPLATE_ROOT_PATH } = require('../../constants/paths');


async function git({ projectPath }) {
  const gitIgnorePath = path.resolve(TEMPLATE_ROOT_PATH, './common/gitignore');
  const execConfig = { cwd: projectPath };

  await fsx.copy(gitIgnorePath, path.resolve(projectPath, '.gitignore'));
  await execa('git', ['init'], execConfig);
  await execa('git', ['add', '.'], execConfig);
  await execa('git', ['commit', '-m', 'feat: first commit.'], execConfig);
}

module.exports = git;
