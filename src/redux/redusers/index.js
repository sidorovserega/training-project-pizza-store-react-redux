import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';
import basket from './basket';

const rootReduser = combineReducers({
  filters, 
  pizzas, 
  basket
});

export default rootReduser;