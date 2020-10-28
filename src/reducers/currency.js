import { SET_CURRENCY } from '../constants/currency';

const initialState = {
  currency: 'rub',
};

export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: payload,
      };

    default:
      return state;
  }
};
