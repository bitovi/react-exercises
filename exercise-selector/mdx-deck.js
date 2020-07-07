const path = require('path');
const { spawn } = require('child_process');

const getExercise = require('./lib/getExercise');

const exercise = getExercise();

const deck = exercise
  ? path.resolve('.', 'src', 'exercises', exercise.id, 'deck.mdx')
  : path.resolve('.', 'src', 'app', 'deck.mdx');

spawn('npm', ['run', 'mdx-deck', deck], {
  stdio: 'inherit',
});
