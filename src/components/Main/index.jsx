import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Refresh the page after logout
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Numericveda</h1>
        <div className={styles.navbar_buttons}>
          {/* Button with a Link component to navigate to a different route */}
          <Link to="/Form">
            <button className={styles.navbar_button}>
              Book Free Class
            </button>
          </Link>
          <Link onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </nav>

    </div> 
  );
};

export default Main;
