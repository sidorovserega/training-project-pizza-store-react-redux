import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  
  const filter = category !== null ? "&category=" + category : "";
  
  axios.get(`/pizzas?${filter}&_sort=${sortBy}&_order=asc`).
    then(({data}) => dispatch(setPizzas(data)));
  
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
