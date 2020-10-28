import { combineReducers } from 'redux';
import { ticketsReducer } from './tickets';
import { currencyReducer } from './currency';

export const rootReducer = combineReducers({
  ticketsReducer,
  currencyReducer,
});
