import React, { useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setPageActive, setSortBy } from '../redux/actions/filters';
import { addPizzaToBasket } from '../redux/actions/basket';
import Pagination from '../components/pagination/Pagination';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { sortTypes } from '../components/SortPopup';
import { categories } from '../components/Categories';

const Home = () => {
  const dispatch = useDispatch();
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

  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  //чтение параметров запроса из адресной строки только при первом рендере
  React.useEffect(() => {
    //чтение только, если есть параметры запроса
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortTypes.find((obj) => obj.type === params.sortByProperty);
      console.log(sort);
      dispatch(setSortBy(sort));

      const category = categories.find((obj) => obj.id === Number(params.category));
      console.log(category);
      dispatch(setCategory(category));

      isSearch.current = true;
    }
  }, []);

  //запрос пицц при изменении критерий запроса
  useEffect(() => {
    window.scrollTo(0, 0);

    //запрашивать, если изначально не было параметров запроса,
    //чтобы исключить двойной отрисовки
    if (!isSearch.current) {
      dispatch(fetchPizzas(category.id, sortBy));
    }
    isSearch.current = false;

    //сохраняем или изменяем параметры в строке запроса, если это не первый рендер
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortByProperty: sortBy.type,
        category: category.id,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sortBy]);

  //установка первой страницы при изменении строки поиска
  React.useEffect(() => {
    dispatch(setPageActive(1));
  }, [searchName, category]);

  const setActiveCategory = (obj) => {
    dispatch(setCategory(obj));
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
        <SortPopup activeSortObj={sortBy} setActiveSortBy={setActiveSortBy} />
      </div>

      <h2 className="content__title">
        {isLoading &&
          (itemsResultToPage.length !== 0
            ? category.name
            : 'По выбранным критериям пиццы отсутствуют')}
      </h2>
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
