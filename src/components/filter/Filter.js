import React from 'react';
import './filter.css';
import Buttons from '../buttons/Buttons';
import { setFilterFormState } from '../../actions/tickets';
import { connect } from 'react-redux';

export const Filter = ({ formState, dispatchSetFormState }) => {
  const btn = ['rub', 'usd', 'eur'].map((item) => {
    return <Buttons key={item} name={item} />;
  });

  const handleFormChange = (field) => (evt) => {
    const stateToMerge = {
      ...formState,
      [field]: evt.target.checked,
    };

    dispatchSetFormState(stateToMerge);
  };

  const { all, withoutChange, one, two, three } = formState;

  const inputs = [
    { check: all, name: 'Все', checkName: 'all', id: 1 },
    { check: withoutChange, name: 'Без пересадок', checkName: 'withoutChange', id: 2 },
    { check: one, name: '1 пересадка', checkName: 'one', id: 3 },
    { check: two, name: '2 пересадки', checkName: 'two', id: 4 },
    { check: three, name: '3 пересадки', checkName: 'three', id: 5 },
  ].map((item) => {
    return (
      <p key={item.id}>
        <input
          checked={item.check}
          type="checkbox"
          onChange={handleFormChange(item.checkName)}
          value={item.name}
        />{' '}
        {item.name}
      </p>
    );
  });

  return (
    <div className="filter">
      <div className="money_block">
        <span className="money">ВАЛЮТА</span>
        <div className="btn_group">{btn}</div>
      </div>
      <div className="check_stops">
        <span className="stops_text">КОЛЛИЧЕСТВО ПЕРЕСАДОК</span>
        <form className="check">{inputs}</form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  dispatchSetFormState: setFilterFormState,
};

const mapStateToProps = (state) => {
  return {
    formState: state.ticketsReducer.filtersForm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
