import { combineReducers } from 'redux'
import filters from './filter'
import pizzas from './pizzas'


const rootReducers = combineReducers({
  filters,
  pizzas
})

export default rootReducers