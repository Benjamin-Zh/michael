const path = require('path');
const i18n = require('../../i18n');
const welcome = require('./welcome');
const check = require('./check');
const resolve = require('./resolve');
const query = require('./query');
const execute = require('./execute');
const install = require('./install');
const git = require('./git');
const complete = require('./complete');
const { assignable } = require('../../utils');
const { CWD } = require('../../constants/paths');


async function create(projectName) {
  const ctx = assignable({ projectName });
  const options = assignable({});

  ctx.options = options;
  ctx.projectPath = path.resolve(CWD, projectName);

  // init internationalization
  await i18n.init('en-US');

  // show welcome text
  await welcome();

  // check project name
  await check(ctx);

  // resolve conflict
  await resolve(ctx);

  // query for options
  await query(options);

  // execute create project tasks
  await execute(ctx);

  // install dependencies
  await install(ctx);

  // create git repository
  await git(ctx);

  // show some notification
  await complete(ctx);
}

module.exports = create;
