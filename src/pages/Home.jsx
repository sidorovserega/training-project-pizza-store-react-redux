import React, { useEffect } from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToBasket } from '../redux/actions/basket';


const Home = () => {

  const {items, sortBy, category, isLoading, basketItems} = useSelector(({pizzas, filters, basket}) => {
    return {
      items: pizzas.items,
      isLoading: pizzas.isLoading,
      sortBy: filters.sortBy,
      category: filters.category,
      basketItems: basket.items
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const setActiveCategory = (index) => {
    dispatch(setCategory(index));
  }

  const setActiveSortBy = (typeName) => {
    dispatch(setSortBy(typeName));
  }

  const onClickAddPizza = (objPizza) => {
    dispatch(addPizzaToBasket(objPizza));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} setActiveCategory={setActiveCategory}/>
        <SortPopup activeSort={sortBy} setActiveSortBy={setActiveSortBy}/>
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
        ?
          items.map(item => 
            <PizzaBlock key={item.id} basketItems={basketItems[item.id] && basketItems[item.id].items.length} onClickAddPizza={onClickAddPizza} {...item}/>
          )
        :
            Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;