import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail, removeSelectedItems } from '../../../redux/products/actions';
import styles from './ItemDetails.module.css';



const ItemDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchItemDetail(productId));
    return () => {
      dispatch(removeSelectedItems());
    };
  }, []);
  
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      quantity: 1, // Assuming you want to add one unit by default
    };
  
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingItemIndex = existingCartItems.findIndex(item => item.id === cartItem.id);
  
    if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].quantity += cartItem.quantity;
    } else {
      existingCartItems.push(cartItem);
    }
  
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
  
    // Alert or any other action you want to perform after adding to cart
    alert(`${cartItem.quantity} ${cartItem.name}(s) added to cart!`);
  };
  

  return (
    <div className={styles.productContainer}>
      {Object.keys(product).length === 0 ? (
        <div className={styles.loadingContainer}><div className="customLoader" /></div>
      ) : (
        <div className={styles.productDetailContainer}>
          <div className={styles.detailsImg}>
            <img className={styles.itemImage} src={image} alt={title} />
          </div>
          <div className={styles.detailsContent}>
            <h2 className={styles.itemName}>{title}</h2>
            <h3>
              <p className={styles.itemPrice}>
                $
                {price}
              </p>
            </h3>
            <div className={styles.catnCartDiv}>
              <h4 className={styles.itemCategory}>{category}</h4>
              <button className={styles.cartPlus}  onClick={handleAddToCart}>
                <FaCartPlus size={25} />
              </button>

            </div>
            <p className={styles.itemDescription}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
