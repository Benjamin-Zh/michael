#!/usr/bin/env node
const program = require('commander');
const create = require('../commands/create');
const { version } = require('../package.json');


program
  .version(version, '-v, --version');

program
  .command('create <projectName>')
  .description('create new projet')
  .action(create);

program.parse(process.argv);
