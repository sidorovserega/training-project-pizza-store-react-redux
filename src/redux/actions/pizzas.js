import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  
  const filter = category !== null ? "&category=" + category : "";
    axios.get(`https://643e8870c72fda4a0bf95812.mockapi.io/pizzas?${filter}&sortBy=${sortBy}&order=asc`).
    then(({data}) => dispatch(setPizzas(data)));
}
   
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
