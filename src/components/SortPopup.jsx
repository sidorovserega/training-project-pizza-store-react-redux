import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const sortTypes = [
  {name: 'популярности', type: 'rating'}, 
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'}
];

const SortPopup = React.memo(({activeSort, setActiveSortBy}) => {
  
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }
  //установка скрытия попапа при клике вне области попапа
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!(e.target === sortRef.current)) {
        setVisiblePopup(false);
      }
    });
  }, []);

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span ref={sortRef} onClick={toggleVisiblePopup}>{sortTypes.find(item => item.type === activeSort).name}</span>
      </div>
      {visiblePopup &&
        <div className={visiblePopup ? "sort__popup active" : "sort__popup"}>
        <ul>
          {sortTypes.map((sortType, index) => 
            <li 
              key={`${sortType.name}_${index}`} 
              className={activeSort === index ? 'active' : ''}
              onClick={() => setActiveSortBy(sortType.type)}
            >
              {sortType.name}
            </li>  
          )}
        </ul>
      </div>
      }
    </div>
  )
});

//типизация пропсов
SortPopup.propTypes = {
  setActiveSortBy: PropTypes.func.isRequired,
  activeSort: PropTypes.string.isRequired
}
//значения по умолчанию
SortPopup.defaultProps = {
  activeSort: null
}

export default SortPopup;