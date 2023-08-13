import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SVGGenerate from '../assets/SVGGenerate/SVGGenerate';

export const sortTypes = [
  { name: 'популярности', type: 'rating_asc'},
  { name: 'популярности', type: 'rating_desc'},
  { name: 'цене', type: 'price_asc'},
  { name: 'цене', type: 'price_desc'},
  { name: 'алфавиту', type: 'name_asc'},
  { name: 'алфавиту', type: 'name_desc'},
];

const SortPopup = React.memo(({ activeSortObj, setActiveSortBy }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
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
      <SVGGenerate nameSVG={activeSortObj.type.includes('asc') ? 'sort_asc' : 'sort_desc'}/>
        <b>Сортировка по:</b>
        <span ref={sortRef} onClick={toggleVisiblePopup}>
          {sortTypes.find((item) => item.type === activeSortObj.type).name}
        </span>
      </div>
      {visiblePopup && (
        <div className={visiblePopup ? 'sort__popup active' : 'sort__popup'}>
          <ul>
            {sortTypes.map((sortObj) => (
              <li
                key={sortObj.type}
                className={`sortItem + ' ' + ${activeSortObj.type === sortObj.type ? 'active' : ''}`}
                onClick={() => setActiveSortBy(sortObj)}
              >
                <span>{sortObj.name}</span>
                <SVGGenerate nameSVG={sortObj.type.includes('asc') ? 'sort_asc' : 'sort_desc'}/>
              </li>
              
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

//типизация пропсов
SortPopup.propTypes = {
  setActiveSortBy: PropTypes.func.isRequired,
  activeSortObj: PropTypes.object,
};
//значения по умолчанию
SortPopup.defaultProps = {
  activeSort: null,
};

export default SortPopup;
