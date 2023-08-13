import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  const filterParam = category !== 0 ? `&category=${category}` : '';
  const sortParam = `&sortBy=${sortBy.type.slice(0, sortBy.type.indexOf('_'))}`;
  const vectorSortParam = `&order=${sortBy.type.slice(sortBy.type.indexOf('_') + 1)}`;
  axios.get(`https://643e8870c72fda4a0bf95812.mockapi.io/pizzas?${filterParam}${sortParam}${vectorSortParam}`).
  then(({data}) => dispatch(setPizzas(data)));
  console.log(sortParam, vectorSortParam);
}
   
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
