import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ItemCard.module.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  if (products.length === 0) {
    return (
      <div className={styles.loadingHome}>
        <div className={styles.Loader} />
      </div>
    );
  }
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className={styles.item} key={id}>
        <div className={styles.itemCard}>
          <div className={styles.itemImage}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.itemDescription}>
            <h3 className={styles.itemName}>{title}</h3>
            <h4 className={styles.itemPrice}>${price}</h4>
            <h5 className={styles.itemCategory}>{category}</h5>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
