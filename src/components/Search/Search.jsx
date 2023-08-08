import React, { useRef } from 'react';
import styles from './Search.module.scss';
import SVGGenerate from '../../assets/SVGGenerate/SVGGenerate';

const Search = ({searchName, onChangeSearch}) => {
  
  const inputSearchRef = useRef();

  const onClickClear = () => {
    onChangeSearch('');
    inputSearchRef.current.focus();
  }

  return (
    <div className={styles.root}>
      <SVGGenerate nameSVG='iconSearch' className={styles.iconSearch}/>
      <input 
        ref={inputSearchRef}
        className={styles.searchInput} 
        placeholder='Поиск пиццы ...'
        value={searchName}  
        onChange={(event) => onChangeSearch(event.target.value)}
      />
      <div onClick={onClickClear}>
        <SVGGenerate nameSVG='iconClose' className={styles.iconClose} />
      </div>
      
    </div>
  )
}

export default Search;