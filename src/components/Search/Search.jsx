import React from 'react';
import styles from './Search.module.scss';
import SVGGenerate from '../../assets/SVGGenerate/SVGGenerate';
import debounce from 'lodash.debounce';

const Search = ({ searchName, onChangeSearch }) => {
  
  const [valueInput, setValueInput] = React.useState(searchName);
  const inputSearchRef = React.useRef();

  const onClickClear = () => {
    onChangeSearch('');
    setValueInput('');
    inputSearchRef.current.focus();
  };
  //ссылка на функцию, которая отработает с задержкой,
  //после чего отправит изменения в state и произойдет поиск
  //необходима для уменьшения запросов на сервер при вводе в input 
  const updateSearchName = React.useCallback(
    debounce((str) => onChangeSearch(str), 
    250), 
    []
  );

  const onChangeInput = (event) => {
    setValueInput(event.target.value);
    updateSearchName(event.target.value);
  };

  return (
    <div className={styles.root}>
      <SVGGenerate nameSVG="iconSearch" className={styles.iconSearch} />
      <input
        ref={inputSearchRef}
        className={styles.searchInput}
        placeholder="Поиск пиццы ..."
        value={valueInput}
        onChange={onChangeInput}
      />
      <div onClick={onClickClear}>
        <SVGGenerate nameSVG="iconClose" className={styles.iconClose} />
      </div>
    </div>
  );
};

export default Search;
