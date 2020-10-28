import { filtersToState } from '../transducers/filter';
import * as _ from 'lodash';

export const selectFilers = (state) => {
  const tickets = state.ticketsReducer.tickets;
  const filters = state.ticketsReducer.filtersForm;

  const sortTickets = _.sortBy(tickets, ['price']);

  const checkFilter = filtersToState(filters, sortTickets);

  return sortTickets.filter((ticket) => {
    const filterString = checkFilter.join();

    if (filterString.includes('all')) {
      return ticket;
    }

    return filterString.includes(ticket.stops);
  });
};
