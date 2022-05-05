const initialState = {
  category: null,
  sortBy: 'rating',
  order: 'asc',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
        order: 'asc',
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
        order: 'asc',
      };
    case 'SET_ORDER':
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }

  
};

export default filters;
