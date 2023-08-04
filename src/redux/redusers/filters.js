const initialState = {
  category: null,
  sortBy: 'rating',
  searchName: ''
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      };
    case 'SET_SEARCH_NAME':
      return {
        ...state,
        searchName: action.payload
      };
    default:
      return state;
  }  
}

export default filters;