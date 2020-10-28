import {
  GET_FILTERS_ERROR,
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  SET_FILTERS_FORM_STATE
} from '../constants/tickets';
import {mockRequest} from "../api/mockRequest";
import {getMockTickets} from "../api/tickets";

export const setFilterFormState = (filterFormState) => {
  return {
    type: SET_FILTERS_FORM_STATE,
    payload: {
      filterFormState,
    },
  };
};

export const getFiltersRequest = () => ({
  type: GET_FILTERS_REQUEST,
});

export const getFiltersError = (error) => ({
  type: GET_FILTERS_ERROR,
  payload: {
    error
  }
});

export const getFiltersSuccess = (tickets) => ({
  type: GET_FILTERS_SUCCESS,
  payload: {
    tickets,
  }
});

export const getTickets = () => async (dispatch) => {
  dispatch(getFiltersRequest());

  try {
    const tickets = await getMockTickets();
    console.log(tickets);


    dispatch(getFiltersSuccess(tickets))
  } catch (error) {
    dispatch(getFiltersError(error));
  }

};