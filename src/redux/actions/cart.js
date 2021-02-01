const ADD_PIZZA_CART = 'react-pizza/cart/ADD_PIZZA_CART';

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});