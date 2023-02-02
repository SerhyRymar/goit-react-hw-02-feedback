import PropTypes from 'prop-types';

const Notification = () => {
  return <span>There is no feedback</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
