const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItem = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }
      const allItems = [].concat.apply([], Object.values(newItem))
      return {
        ...state,
        items: newItem,
        totalPrice: allItems.length,
        totalCount: allItems.reduce((sum, item) => item.price + sum, 0),
      };
    default:
      return state;
  }
};
export default cart;
