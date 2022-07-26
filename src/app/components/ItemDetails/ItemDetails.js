import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail, removeSelectedItems } from '../../../redux/products/products';
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
            <h4 className={styles.itemCategory}>{category}</h4>
            <p className={styles.itemDescription}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
