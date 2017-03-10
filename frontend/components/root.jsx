
import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetail from './pokemon/pokemon_detail';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/item_detail_container';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer}>
        <IndexRoute component={PokemonFormContainer} />
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} >
          <Route path="item/:itemId" component={ItemDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
