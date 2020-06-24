const Module = require('module')
const path = require('path')
const fs = require('fs')
const readlineSync = require('readline-sync')

const exercisesPath = path.join(__dirname, 'src', 'exercises')
const exercises = fs.readdirSync(exercisesPath)
  .map((id) => {
    try {
      const dirname = path.join(exercisesPath, id)
      const { name } = require(`./src/exercises/${id}/exercise.json`)

      return {
        id,
        name,
        dirname,
      }
    } catch (e) {
      return false
    }
  })
  .filter(config => typeof config === 'object')

const index = getExercise(exercises)
process.env.EXERCISE = index

const aliases = {}
if (index > -1) {
  const exercise = exercises[index]
  if (!exercise) {
    console.error(`Unknown exercise ${process.argv[2] || index}`)
    process.exit(1)
  }

  readdir(exercise.dirname).forEach((file) => {
    aliases[file] = path.join(exercise.dirname, file)
  })
}

Module.prototype._require = Module.prototype.require
Module.prototype.require = function require(name) {
  const filename = Module._resolveFilename(name, this)
  if (filename.endsWith('/react-scripts/config/webpack.config.js')) {
    const makeWebpackConfig = this._require(filename)

    return function makeCustomWebpackConfig(webpackEnv) {
      const config = makeWebpackConfig(webpackEnv)

      for (const alias in aliases) {
        config.resolve.alias[path.join(__dirname, 'src', 'app', alias)] = aliases[alias]
      }

      return config
    }
  }

  return this._require(name)
}

if (process.argv[1].endsWith('react-scripts/scripts/test.js')) {
  const jest = require('jest')

  jest._run = jest.run
  jest.run = function run(args) {
    const configIndex = args.indexOf('--config') + 1
    if (configIndex > 0) {
      const config = JSON.parse(args[configIndex])

      config.resolver = './exercises.js'

      args[configIndex] = JSON.stringify(config)
    }

    return jest._run(args)
  }
}

module.exports = function resolver(source, options) {
  const {defaultResolver} = options

  if (options.rootDir) {
    const key = path.relative(
      path.join(options.rootDir, 'src', 'app'),
      path.join(options.basedir, source),
    )

    if (aliases[key]) {
      return aliases[key]
    }
  }

  return defaultResolver(source, options)
}

function getExercise(exercises) {
  if (process.env.EXERCISE) {
    return process.env.EXERCISE
  }

  if (process.argv[2]) {
    return parseInt(process.argv[2], 10) - 1
  }

  return readlineSync.keyInSelect(exercises.map(exercise => exercise.name), 'Choose an exercise:', {
    cancel: 'No Exercise',
  })
}

function readdir(directory, level = 0) {
  const files = fs
    .readdirSync(directory)
    .filter(file => !file.startsWith('.'))

  const output = []
  for (const file of files) {
    const filename = path.join(directory, file)
    const stat = fs.statSync(filename)

    if (stat.isDirectory()) {
      output.push(...readdir(filename, level + 1).map(child => path.join(file, child)))
    }

    if (stat.isFile()) {
      output.push(file)
    }
  }

  return output
}
