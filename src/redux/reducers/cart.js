const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const cart = (state = initialState, action) => {
  
  switch (action.type) {
    
    case 'ADD_PIZZA_TO_CART':
      const newItems = {
        ...state.items,
              [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [
                ...state.items[action.payload.id],
                action.payload
              ]
      }
      const allPizzas = [].concat.apply([], Object.values(newItems))
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, arr) => arr.price + sum, 0)
      }
      
  
    default:
      return state
  }
}

export default cart