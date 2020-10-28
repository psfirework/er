import tickets from '../data/tickets.json';
import {
  GET_FILTERS_ERROR,
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  SET_FILTERS_FORM_STATE
} from '../constants/tickets';

const initialState = {
  tickets: [],
  filtersForm: {
    all: false,
    withoutChange: false,
    one: false,
    two: false,
    three: false,
  },
  isLoading: false,
  error: null,
};

export const ticketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTERS_FORM_STATE:
      return {
        ...state,
        filtersForm: payload.filterFormState,
      };

    case GET_FILTERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_FILTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        tickets: payload.tickets,
      };

    default:
      return state;
  }
};
