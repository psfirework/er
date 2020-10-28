import React from 'react';
import './App.css';
import CardGroup from '../cardsGroup/CardsGroup';
import Filter from '../filter/Filter';
import { Provider } from 'react-redux';
import { store } from '../../store/createStore';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Filter />
        <CardGroup />
      </div>
    </Provider>
  );
};
