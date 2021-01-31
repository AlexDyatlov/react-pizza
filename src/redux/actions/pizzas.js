import axios from 'axios';

const SET_PIZZAS = 'react-pizza/pizzas/SET_PIZZAS';
const SET_LOADED = 'react-pizza/pizzas/SET_LOADED';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});
 
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas?${
    category !== null ? `category=${category}` : ''}&_sort=${
  sortBy.type}&_order=${sortBy.order}`)
  .then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});