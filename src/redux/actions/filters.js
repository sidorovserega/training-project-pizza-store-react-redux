export const setSortBy = (type) => ({
  type: 'SET_SORT_BY',
  payload: type
});

export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex
});

export const setSearchName = (searchName) => ({
  type: 'SET_SEARCH_NAME',
  payload: searchName
});

export const setPageActive = (pageActive) => ({
  type: 'SET_PAGE_ACTIVE',
  payload: pageActive
});