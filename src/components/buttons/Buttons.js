import React from 'react';
import './button.css';
import { setCurrency } from '../../actions/currency';
import { connect } from 'react-redux';

const Buttons = (props) => {
  const { dispatchCurrency, name, currency } = props;
  const currencyName = name;

  return (
    <button
      onClick={() => dispatchCurrency(currencyName)}
      value={name}
      className={currencyName === currency ? 'btn_active' : ''}
    >
      {name.toUpperCase()}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyReducer.currency,
  };
};

const mapDispatchToProps = {
  dispatchCurrency: setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
