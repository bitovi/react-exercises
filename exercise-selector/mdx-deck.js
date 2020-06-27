const path = require('path');
const { spawn } = require('child_process');

const getExercise = require('./lib/getExercise');

const exercise = getExercise();

const deck = exercise
  ? `./src/exercises/${exercise.id}/deck.mdx`
  : './src/app/deck.mdx';

spawn('npm', ['run', 'mdx-deck', deck], {
  stdio: 'inherit',
});
