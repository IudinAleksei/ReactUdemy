import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          How
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>1.</strong>
          How
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>Правильно</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz;