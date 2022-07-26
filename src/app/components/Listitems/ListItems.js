/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { fetchProducts, productFilter } from '../redux/products/products';
import ProductComponent from './ProductComponent';
import styles from './ListItems.module.css';

const ProductPage = () => {
  const productData = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === '') {
      dispatch(fetchProducts());
    } else {
      dispatch(productFilter(search));
    }
  };

  return (
    <>
      <div className={styles.searchBar}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className={styles.searchInput}
            value={search}
            placeholder="Search Products"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <button className={styles.searchBtn} type="submit">
          <BsSearch />
        </button>
      </div>
      <div className={styles.itemsSection}>
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductPage;
