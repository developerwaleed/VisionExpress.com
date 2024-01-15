import React, { useState } from 'react';
import './Cart.css';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ displayProperty }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const clearCart = () => {
    localStorage.removeItem('cart');
    console.log('Cart cleared');

    setCartItems([]);
  };

  return (
    <div id="cart" style={{ display: displayProperty }}>
      <div className="cart-content">
        <header id="cart-header">

          <h2 className="cart-title">Your cart <i><FaShoppingCart />
          </i></h2>
        </header>
        <main id="cart-body">
          {cartItems.length === 0 ? (
            <img src="/cart-bg.png" alt="Empty Cart" />
          ) : (
            <table className="cart-table">
              <thead>
                <br></br>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                <br></br>
                <br></br>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={`${item.image}`}
                        alt={item.name}
                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
                      />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.quantity}</td>

                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
        <p className="total">
          Total: <span className="total-counter">${calculateTotal(cartItems)}</span>
        </p>
        <footer id="cart-footer">
          <a href="#" className='confirmBtn'>Confirm</a>
          <a href="#" id="clear-btn" className="confirmBtn clearBtn" onClick={clearCart}>
            Clear Cart
          </a>
        </footer>
      </div>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
