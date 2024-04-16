import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Thankyou = () => {
  return (
    <div className={styles.thank_you_container}>
      <h1 className={styles.thank_you_title}>Thank You for Registering!</h1>
      <p className={styles.thank_you_message}>
        We appreciate your interest. You are now registered for the Vedic Maths Masterclass.
      </p>
      <p className={styles.thank_you_message}>
        We look forward to seeing you on the chosen day.
      </p>
      <Link to="/" className={styles.back_to_home}>
        Back to Home
      </Link>
    </div>
  );
};

export default Thankyou;
