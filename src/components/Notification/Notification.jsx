import PropTypes from 'prop-types';
import css from './Notification.modules.css';

const Notification = () => {
  return <span className={css.notification_text}>There is no feedback</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
