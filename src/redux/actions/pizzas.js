import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  
  const filter = category !== null ? "&category=" + category : "";
  
  axios.get(process.env.NODE_ENV === 'development' ?
    `http://localhost:3001/pizzas?${filter}&_sort=${sortBy}&_order=asc` : 
    `https://sidorovserega.github.io/training-project-pizza-store-react-redux/db.json`).
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
