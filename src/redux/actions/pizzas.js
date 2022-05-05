import axios from 'axios';

export const setLoaded = (bool) => ({
  type: 'SET_LOADED',
  payload: bool,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
  console.log(category, sortBy);
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
