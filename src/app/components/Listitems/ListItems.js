/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { fetchItems, itemFilter } from '../../../redux/products/products';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ListItems.module.css';

const Listitems = () => {
  const productData = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchItems());
    }
  }, []);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === '') {
      dispatch(fetchItems());
    } else {
      dispatch(itemFilter(search));
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
        <ItemCard />
      </div>
    </>
  );
};

export default Listitems;
