import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';

const ProductComponent = ({ displayedProducts }) => {

  if (displayedProducts.length === 0) {
    return (
      <div className={styles.loadingHome}>
        <img src="/loading.webp" width="50px" alt="Loading" />
      </div>
    );
  }

  const renderList = 
  displayedProducts.map((product) => {
      const {
        id, title, image, price, category,
      } = product;

      return (
        <div className={styles.item} key={id}>
          <Link to={`/product/${id}`}>
            <div className={styles.itemCard}>
              <div className={styles.itemImage}>
                <img src={image} alt={title} width="50px" />
              </div>
              <div className={styles.itemDescription}>
                <h3 className={styles.itemName}>{title}</h3>
                <h4 className={styles.itemPrice}>
                  $
                  {price}
                </h4>
                <h5 className={styles.itemCategory}>{category}</h5>
              </div>
            </div>
          </Link>
        </div>
      );
    })

  return <>{renderList}</>;
};

export default ProductComponent;
