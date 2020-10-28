import { SET_CURRENCY } from '../constants/currency';

export const setCurrency = (currency) => {
  return {
    type: SET_CURRENCY,
    payload: currency,
  };
};
