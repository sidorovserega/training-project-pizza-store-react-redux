import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({pageActive, onChangePageActive, totalPages}) => { 
  
  const classNameButtonEnd = pageActive - 1 < 1 ? styles.navigate + ' ' + styles.disabled : styles.navigate;
  const classNameButtonNext = pageActive + 1 > totalPages ? styles.navigate + ' ' + styles.disabled : styles.navigate;

  return (
    <ul className={styles.pagination}>
      <li 
        className={classNameButtonEnd} onClick={() => onChangePageActive(pageActive - 1)}>Назад</li>
      {
        Array.from(Array(totalPages).keys()).map(item => 
          <li 
            key={item}
            className={(item + 1) === pageActive ? styles.active : ''} 
            onClick={() => onChangePageActive(item + 1)} 
          >
            {item + 1}
          </li>
        )
      }
      <li className={classNameButtonNext} onClick={() => onChangePageActive(pageActive + 1)}>Вперед</li>
    </ul>
  )
}

export default Pagination;