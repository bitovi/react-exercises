import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import exercise from './exercise.json';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    {exercise.name && <div>Exercise: {exercise.name}</div>}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
