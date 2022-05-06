const initialState = {
  items: [],
  isLoad: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isLoad: true,
    };
  }
  if (action.type === 'SET_LOAD') {
    return {
      ...state,
      isLoad: false,
    };
  }
  return state;
};

export default pizzas;
