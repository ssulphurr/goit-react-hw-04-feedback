import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li>
        <span className={css.statParam}>Good:</span> {good}
      </li>
      <li>
        <span className={css.statParam}>Neutral:</span> {neutral}
      </li>
      <li>
        <span className={css.statParam}>Bad:</span> {bad}
      </li>

      <li>
        <span className={css.statParam}>Total:</span> {total()}
      </li>

      <li>
        <span className={css.statParam}>Positiv feedback:</span>{' '}
        {positivePercentage()} %
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
