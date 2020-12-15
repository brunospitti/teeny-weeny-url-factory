const path = require('path');
const fs = require('fs');

const resolveApp = (...relativePath) => {
  const appDirectory = fs.realpathSync(process.env.INIT_CWD);

  return path.resolve(appDirectory, ...relativePath);
};

const paths = {
  root: resolveApp('.'),
  client: resolveApp('src', 'client'),
  dist: resolveApp('dist'),
  server: resolveApp('src', 'server'),
};

module.exports = {
  resolveApp,
  paths,
};
