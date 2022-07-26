import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import '../../../App.css';
// import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <nav className={styles.navbar}>
      <i className={styles.backBtn}>
        <MdOutlineArrowBackIosNew />
      </i>
      <h2 className={styles.shopName}>Vission Express</h2>
      <div className={styles.Lefticons}>
        <i className={styles.icons}>
          <FaMicrophone />
        </i>
        <i className={styles.icons}>
          <AiOutlineSetting />
        </i>
      </div>
    </nav>
  </header>
);
export default Header;
