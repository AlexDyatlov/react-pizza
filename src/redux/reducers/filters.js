const SET_SORT_BY = 'react-pizza/filters/SET_SORT_BY';
const SET_CATEGORY = 'react-pizza/filters/SET_CATEGORY';

const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: 'desc',
  }
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    case SET_CATEGORY:
        return {
          ...state,
        category: action.payload,
      }
    default:
      return state;
  }
};

export default filtersReducer;