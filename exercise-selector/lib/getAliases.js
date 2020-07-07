const path = require('path');
const fs = require('fs');

const getExercise = require('./getExercise');

module.exports = function getAliases() {
  const exercise = getExercise();
  if (!exercise) {
    return {};
  }

  const aliases = {};
  readdir(exercise.dirname).forEach((file) => {
    if (file.startsWith('_') || file === 'deck.mdx') {
      return;
    }

    aliases[file] = path.join(exercise.dirname, file);
  });
  return aliases;
};

function readdir(directory, level = 0) {
  const files = fs
    .readdirSync(directory)
    .filter((file) => !file.startsWith('.'));

  const output = [];
  for (const file of files) {
    const filename = path.join(directory, file);
    const stat = fs.statSync(filename);

    if (stat.isDirectory()) {
      output.push(
        ...readdir(filename, level + 1).map((child) => path.join(file, child)),
      );
    }

    if (stat.isFile()) {
      output.push(file);
    }
  }

  return output;
}
