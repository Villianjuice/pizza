import { combineReducers } from 'redux';
import filters from './filter';
import pizzas from './pizzas';
import cart from './cart';

const rootReducers = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducers;
