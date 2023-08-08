import React, { useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setPageActive, setSortBy } from '../redux/actions/filters';
import { addPizzaToBasket } from '../redux/actions/basket';
import Pagination from '../components/pagination/Pagination';

const Home = () => {
  const { items, sortBy, category, searchName, pageActive, isLoading, basketItems } = useSelector(
    ({ pizzas, filters, basket }) => {
      return {
        items: pizzas.items,
        isLoading: pizzas.isLoading,
        sortBy: filters.sortBy,
        category: filters.category,
        searchName: filters.searchName,
        pageActive: filters.pageActive,
        basketItems: basket.items,
      };
    },
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    dispatch(setPageActive(1));
    window.scrollTo(0, 0);
  }, [category, sortBy, searchName]);

  const setActiveCategory = (index) => {
    dispatch(setCategory(index));
  };

  const setActiveSortBy = (typeName) => {
    dispatch(setSortBy(typeName));
  };

  const onClickAddPizza = (objPizza) => {
    dispatch(addPizzaToBasket(objPizza));
  };

  const onChangePageActive = (page) => {
    dispatch(setPageActive(page));
  };

  //количество карточек на странице
  const totalPizzaBlockToPage = 4;
  //итоговый массив пицц после поиска по названию,
  //так как фильтрация и поиск в mockapi совместно работают некорректно
  const itemsResultToSearch = items.filter((item) => item.name.toLowerCase().includes(searchName));
  const itemsResultToPage = itemsResultToSearch.filter(
    (item, index) =>
      index >= pageActive * totalPizzaBlockToPage - totalPizzaBlockToPage &&
      index < pageActive * totalPizzaBlockToPage,
  );
  //количетсво страниц
  const totalPages = Math.ceil(itemsResultToSearch.length / totalPizzaBlockToPage);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} setActiveCategory={setActiveCategory} />
        <SortPopup activeSort={sortBy} setActiveSortBy={setActiveSortBy} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? itemsResultToPage.map((item) => (
              <PizzaBlock
                key={item.id}
                basketItems={basketItems[item.id] && basketItems[item.id].items.length}
                onClickAddPizza={onClickAddPizza}
                {...item}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
      <Pagination
        pageActive={pageActive}
        onChangePageActive={onChangePageActive}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
