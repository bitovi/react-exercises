import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import exercise from './exercise.json';

ReactDOM.render(
  <React.StrictMode>
    Exercise: {exercise.name}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
