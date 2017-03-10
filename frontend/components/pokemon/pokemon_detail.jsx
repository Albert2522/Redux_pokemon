import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router';


class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps (newProps) {
    if ((this.props.params.pokemonId) !== (newProps.params.pokemonId)) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  createPath(item) {
    return (`pokemon/${this.props.params.pokemonId}/item/${item.id}`);
  }

  render () {
    if (Object.keys(this.props.pokemon).length > 0) {
      return (
        <div>
          <img src={this.props.pokemon.image_url} />
          <h2>{this.props.pokemon.name}</h2>
          <p>type: {this.props.pokemon.poke_type}</p>
          <p> attack: {this.props.pokemon.attack}</p>
          <p>defense: {this.props.pokemon.defense}</p>
          <ul>moves: {this.props.pokemon.moves.map( (move) =>
              <li key={move}>{move}</li>
            )}</ul>
          <h3>Items:</h3>
          <ul className="item_images"> {this.props.pokemon.items.map( (item) =>
                <li key={item.name}><Link to={this.createPath(item)}><img src={item.image_url}/></Link></li>
              )}</ul>
            <section className="item_stuff">
              {this.props.children}
            </section>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default PokemonDetail;
