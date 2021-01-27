const SET_PIZZAS = 'react-pizza/pizzas/SET_PIZZAS'

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});