import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { fetchItems, itemFilter } from '../../../redux/products/actions';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ListItems.module.css';

const Listitems = () => {
  const productsPerPage = 6;
  const productData = useSelector((state) => state.allProducts.products);
  const noItemsFound = useSelector((state) => state.allProducts.noItemsFound);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchItems());
    }
  }, []);

  const debouncedSearch = _debounce((value) => {
    value = value.toLowerCase();
    if (value === '') {
      dispatch(fetchItems());
    } else {
      dispatch(itemFilter(value));
    }
  }, 300);


  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(e.target.value);
  };

  const totalPages = Math.ceil(productData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = productData.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <form>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Products"
            onChange={handleSearch}
          />
        </form>
      </div>
      <div className={styles.itemsSection}>
        {noItemsFound ? (
          <div className={styles.notfoundimgDiv}>
            <img className={styles.notfoundimg} src="/notfound.png" alt="No items found" />
          </div>
        ) : (
          <>
            <ItemCard displayedProducts={displayedProducts} />
          </>
        )}
      </div>
        <div className={styles.paginationParent}>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
    </>
  );
};

export default Listitems;
