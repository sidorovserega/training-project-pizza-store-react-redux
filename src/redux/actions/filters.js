export const setSortBy = (typeObj) => ({
  type: 'SET_SORT_BY',
  payload: typeObj
});

export const setCategory = (categoryObj) => ({
  type: 'SET_CATEGORY',
  payload: categoryObj
});

export const setSearchName = (searchName) => ({
  type: 'SET_SEARCH_NAME',
  payload: searchName
});

export const setPageActive = (pageActive) => ({
  type: 'SET_PAGE_ACTIVE',
  payload: pageActive
});