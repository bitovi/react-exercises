import React from 'react';
import cx from 'classnames';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.board}>
      <div className={styles.square}>O</div>
      <div className={styles.square}>X</div>
      <div className={styles.square}>O</div>
      <div className={cx(styles.square, styles.hint)}></div>
      <div className={styles.square}>X</div>
      <div className={styles.square}>X</div>
      <div className={styles.square}></div>
      <div className={styles.square}>O</div>
      <div className={styles.square}>X</div>
    </div>
  );
}

export default App;
