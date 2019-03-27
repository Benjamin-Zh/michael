const path = require('path');


const CWD = process.cwd();

module.exports = {
  CWD,
  TEMPLATE_ROOT_PATH: path.resolve(__dirname, '../templates'),
};
