import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import styles from './Header.module.css';

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const updateCartItemCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItemCount(cartItems.length);
    };

    updateCartItemCount();

    const intervalId = setInterval(updateCartItemCount, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">
          <i className={styles.backBtn}>
            <MdOutlineArrowBackIosNew />
          </i>
        </Link>
        <h2 className={styles.shopName}>Vission Express</h2>

        <button className={`${styles.icons} ${styles.carticon}`} onClick={toggleCart}>
          {showCart ? (
            <>
              <FaTimes size={20}/>
              {cartItemCount > 0 && (
                <div className={styles.counter}>
                  {cartItemCount}
                </div>
              )}
            </>
          ) : (
            <>
              <FaShoppingCart size={20}/>
              {cartItemCount > 0 && (
                <div className={styles.counter}>
                  {cartItemCount}
                </div>
              )}
            </>
          )}
        </button>

        {showCart && (
            <Cart displayProperty={showCart ? 'block' : 'none'} />
        )}
      </nav>
    </header>
  );
};

export default Header;
