import React from 'react';
import PropTypes from 'prop-types';

const LeftFeedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => {
        return (
          <button
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