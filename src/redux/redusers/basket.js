const initialState = {
  //список выбранных пицц
  items: {},
  //общая стоимость
  totalPrice: 0,
  //общее количество выбранных пицц
  totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => sum = sum + obj.price, 0);

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_BASKET': {
      const currentPizzaItems = !state.items[action.payload.id] ?
        [{...action.payload}] :
        [...state.items[action.payload.id].items, action.payload];  
      
      const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPriceItems: getTotalPrice(currentPizzaItems)
          } 
        };
       
        const items = Object.values(newItems).map(obj => obj.items);
        const allPizzas = [].concat.apply([], items);

        return {
          ...state,
          items: newItems,
          totalCount: allPizzas.length,
          totalPrice: getTotalPrice(allPizzas)
        }
      }; 

    case 'CLEAR_BASKET': {
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0
      };
    }

    case 'REMOVE_BASKET_ITEM': {
      const newItems = {
        ...state.items
      }
      
      delete newItems[action.payload];
      const countDelete = state.items[action.payload].items.length;
      const priceDelete = state.items[action.payload].totalPriceItems;

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - countDelete,
        totalPrice: state.totalPrice - priceDelete
      };
    } 

    case 'MINUS_BASKET_ITEM': {
      let newItems, countDelete, priceDelete;

      if (state.items[action.payload].items.length === 1) {
        newItems = {
          ...state.items
        }
        
        delete newItems[action.payload];
        countDelete = state.items[action.payload].items.length;
        priceDelete = state.items[action.payload].totalPriceItems;
      }

      if (state.items[action.payload].items.length > 1) {

        priceDelete = state.items[action.payload].items[0].price;
        countDelete = 1;

        newItems = {
          ...state.items,
          [action.payload]: {
            items: state.items[action.payload].items.slice(0, state.items[action.payload].items.length-1),
            totalPriceItems: state.items[action.payload].totalPriceItems - priceDelete
          }
        }
      }
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - countDelete,
        totalPrice: state.totalPrice - priceDelete
      }
    }

    case 'PLUS_BASKET_ITEM': {

      const pricePlus = state.items[action.payload].items[0].price;
      const countPlus = 1;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: state.items[action.payload].items.concat(state.items[action.payload].items[0]),
          totalPriceItems: state.items[action.payload].totalPriceItems + pricePlus
        }
      }

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + countPlus,
        totalPrice: state.totalPrice + pricePlus
      }
    }

    default:
      return state;
  }  
}

export default basket;