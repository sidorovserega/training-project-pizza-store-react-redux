import React from 'react';
import styles from './Search.module.scss';
import SVGGenerate from '../../assets/SVGGenerate/SVGGenerate';

const Search = () => {
  
  return (
    <div className={styles.root}>
      <SVGGenerate nameSVG='iconSearch' className={styles.iconSearch}/>
      <input className={styles.searchInput} placeholder='Поиск пиццы ...'/>
      <SVGGenerate nameSVG='iconClose' className={styles.iconClose}/>
    </div>
  )
}

export default Search;