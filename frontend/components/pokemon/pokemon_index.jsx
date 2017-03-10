import React from 'react';
import merge from 'lodash/merge';
import {PokemonIndexItem} from './pokemon_index_item';


class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }



  render () {
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div>
        <ul className="sideBar">
          {pokemonItems}
        </ul>
        <section className="details">
          {this.props.children}
        </section>
      </div>

    );
  }
}

export default PokemonIndex;
