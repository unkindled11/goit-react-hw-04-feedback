import PropTypes from 'prop-types';

import styles from './notification.module.css';


const Notification=({ message })=>{
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{message}</h2>
    </div>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

