import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
