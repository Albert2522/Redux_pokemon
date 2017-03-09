
import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';


const Root = ({ store }) => (
  <Provider store={store}>
    <div><PokemonIndexContainer /></div>
  </Provider>
);

export default Root;
