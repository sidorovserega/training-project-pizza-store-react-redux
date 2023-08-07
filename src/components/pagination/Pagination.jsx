import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({pageActive, onChangePageActive, totalPizzaBlockToPage, totalPages}) => { 
  
  return (
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => onChangePageActive(event.selected + 1)}
        pageRangeDisplayed={totalPizzaBlockToPage}
        pageCount={totalPages}
        previousLabel="<"
      />
  )
}

export default Pagination;