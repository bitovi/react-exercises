const path = require('path');
const fs = require('fs');
const readlineSync = require('readline-sync');

const srcPath = path.join(__dirname, '..', '..', 'src');
const exercisesPath = path.join(srcPath, 'exercises');
const chars = '123456789abcdefghijklmnopqrstuvwxyz'

module.exports = function getExercise() {
  const exercises = fs
    .readdirSync(exercisesPath)
    .map((id) => {
      try {
        const dirname = path.join(exercisesPath, id);
        const { name } = require(`${exercisesPath}/${id}/exercise.json`);

        return {
          id,
          name,
          dirname,
        };
      } catch (e) {
        return false;
      }
    })
    .filter((config) => typeof config === 'object');

  let index = null;
  if (process.env.EXERCISE || process.argv[2]) {
    index = chars.indexOf(process.env.EXERCISE || process.argv[2])
  } else {
    index = readlineSync.keyInSelect(
      exercises.map((exercise) => exercise.name),
      'Choose an exercise:',
      {
        cancel: 'No Exercise',
      },
    );
  }

  if (index > -1 && !exercises[index]) {
    console.error(`Unknown exercise ${process.argv[2] || index}`);
    process.exit(1);
  }

  process.env.EXERCISE = chars[index]

  return exercises[index];
};
