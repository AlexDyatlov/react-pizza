const SET_SORT_BY = 'react-pizza/filters/SET_SORT_BY'

const initialState = {
  category: 0,
  sortBy: 'popular'
};

const filtersReducer = (state = initialState, action) => {
  if (action.type === SET_SORT_BY) {
    return {
      ...state, // берём старые данные
      sortBy: action.payload, // заменяем на action.payload
    }
  }
  return state;
};

export default filtersReducer;