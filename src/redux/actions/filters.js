const SET_SORT_BY = 'react-pizza/filters/SET_SORT_BY';
const SET_CATEGORY = 'react-pizza/filters/SET_CATEGORY';

export const setSortBy = ({type, order}) => ({
  type: SET_SORT_BY,
  payload: {type, order},
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});