import React from 'react';
import styles from './Search.module.scss';
import SVGGenerate from '../../assets/SVGGenerate/SVGGenerate';

const Search = ({searchName, onChangeSearch}) => {
  
  return (
    <div className={styles.root}>
      <SVGGenerate nameSVG='iconSearch' className={styles.iconSearch}/>
      <input 
        className={styles.searchInput} 
        placeholder='Поиск пиццы ...'
        value={searchName}  
        onChange={(event) => onChangeSearch(event.target.value)}
      />
      <div onClick={() => onChangeSearch('')}>
        <SVGGenerate nameSVG='iconClose' className={styles.iconClose} />
      </div>
      
    </div>
  )
}

export default Search;