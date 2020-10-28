import React, {useEffect} from 'react';
import { Card } from '../cards/Card';
import { connect } from 'react-redux';
import { selectFilers } from '../../selectors/selectFilters';
import {ActivityIndicator} from "../ActivityIndicator/ActivityIndicator";
import {getTickets} from "../../actions/tickets";

const CardGroup = (props) => {
  const { tickets, currency, error, isLoading, dispatchGetTickets } = props;

  useEffect(() => {
    dispatchGetTickets();
  }, []);

  const ticketView = tickets.map((ticket) => (
    <Card key={ticket.arrival_time + ticket.departure_time} tickets={ticket} currency={currency} />
  ));

  if (isLoading) {
    return <ActivityIndicator/>
  }

  if (error) {
    return <div>Error happened</div>
  }

  return <div>
    {ticketView}
  </div>;
};

const mapStateToProps = (state) => {
  return {
    tickets: selectFilers(state),
    currency: state.currencyReducer.currency,
    isLoading: state.ticketsReducer.isLoading,
    error: state.ticketsReducer.error,
  };
};

const mapDispatchToProps = {
  dispatchGetTickets: getTickets,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardGroup);
