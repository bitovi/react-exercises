const Module = require('module');
const path = require('path');

const getAliases = require('./lib/getAliases');

const appPath = path.join(__dirname, '..', 'src', 'app');
const aliases = getAliases();

// Webpack config override
Module.prototype._require = Module.prototype.require;
Module.prototype.require = function require(name) {
  const filename = Module._resolveFilename(name, this);
  if (filename.endsWith('/react-scripts/config/webpack.config.js')) {
    const makeWebpackConfig = this._require(filename);

    return function makeCustomWebpackConfig(webpackEnv) {
      const config = makeWebpackConfig(webpackEnv);

      for (const alias in aliases) {
        config.resolve.alias[path.join(appPath, alias)] = aliases[alias];
      }

      return config;
    };
  }

  return this._require(name);
};

// Jest config override
if (process.argv[1].endsWith('react-scripts/scripts/test.js')) {
  const jest = require('jest');

  jest._run = jest.run;
  jest.run = function run(args) {
    const configIndex = args.indexOf('--config') + 1;
    if (configIndex > 0) {
      const config = JSON.parse(args[configIndex]);

      config.resolver = path.join(__dirname, 'jest-resolver.js');

      args[configIndex] = JSON.stringify(config);
    }

    return jest._run(args);
  };
}
