const path = require('path');

const getExercise = require('./lib/getExercise');
const getAliases = require('./lib/getAliases');

const aliases = getAliases();

module.exports = function resolver(source, options) {
  const { defaultResolver } = options;

  if (options.rootDir) {
    const key = path.relative(
      path.join(options.rootDir, 'src', 'app'),
      path.join(options.basedir, source),
    );

    if (aliases[key]) {
      return aliases[key];
    }
  }

  return defaultResolver(source, options);
};
