import React from 'react';
import merge from 'lodash/merge';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    let monsters = this.props.pokemon;
    return (
      <ul className="sideBar">
        { monsters.map(el => <li key={ el.id }> {el.id} <img src={el.image_url} /> { el.name }</li>)}
      </ul>

    );
  }
}

export default PokemonIndex;
