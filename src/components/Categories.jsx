import React from 'react';
import PropTypes, { number } from 'prop-types';

const categories = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

const Categories = React.memo(({activeCategory, setActiveCategory}) => {

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeCategory === null ? 'active' : ''}
          onClick={() => setActiveCategory(null)}
        >
          Все
        </li>
        {categories &&
          categories.map((nameCategory, index) => 
            <li
              key={`${nameCategory}_${index}`}
              className={index === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(index)}
            >
              {nameCategory}
            </li> 
          ) 
        }
      </ul>
    </div>
  )
});

//типизация пропсов
Categories.propTypes = {
  setActiveCategory: PropTypes.func,
  activeCategory: PropTypes.number
};
//значения по умолчанию
Categories.defaultProps = {
  activeCategory: null
};

export default Categories;