import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const LeftFeedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback_container}>
      <h2 className={css.feedback_title}>
        Please leave feedback</h2>
      {options.map(option => {
        return (
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </button>
        );
      })}
    </div>
  );
};

LeftFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default LeftFeedback;