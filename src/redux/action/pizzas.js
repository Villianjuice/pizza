import axios from 'axios';

const setLoad = () => ({
  type: 'SET_LOAD',
});

export const setFetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoad())
  axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
