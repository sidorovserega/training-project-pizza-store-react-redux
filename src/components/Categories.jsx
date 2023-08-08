import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  {id: 0, name: 'Все пиццы'},
  {id: 1, name: 'Мясные'},
  {id: 2, name: 'Вегетарианские'},
  {id: 3, name: 'Гриль'},
  {id: 4, name: 'Острые'},
  {id: 5, name: 'Закрытые'}
];

const Categories = React.memo(({activeCategory, setActiveCategory}) => {

  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map(category => 
            <li
              key={category.id}
              className={category.id === activeCategory.id ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category.name}
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
  activeCategory: PropTypes.object 
};
//значения по умолчанию
Categories.defaultProps = {
  activeCategory: null
};

export default Categories;