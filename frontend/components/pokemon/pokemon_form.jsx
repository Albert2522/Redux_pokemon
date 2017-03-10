import React from 'react';
import merge from 'lodash/merge';
import {PokemonIndexItem} from './pokemon_index_item';
import { withRouter } from 'react-router';
import update from 'immutability-helper';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      moves: [],
      attack: "",
      defense: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    console.log(this);
    this.state.moves = [this.state.move_1, this.state.move_2];
    e.preventDefault();
    this.props.sendPokemon(this.state).then((newPokemon) => {
      this.props.router.push(`pokemon/${newPokemon.id}`);
    });
  }


  update_st (property) {
    return e => this.setState({[property]: e.target.value});
  }


  render () {

    return (
      <div>
        <h3> Create Pokemon</h3>
        <form onSubmit={ this.handleSubmit } className="pokeForm">
          <input type="text" placeholder="Name" value={ this.state.name }
            onChange={ this.update_st('name')} /><br />
          <input type="text" placeholder="Image Url" value={ this.state.image_url }
            onChange={ this.update_st('image_url')} /><br />
          <select value={this.state.poke_type} onChange={this.update_st("poke_type")}>
            {TYPES.map( (type) => <option key={type} value={type}>{type}</option>)}
          </select><br />
          <input type="text" placeholder="Attack" value={ this.state.attack }
            onChange={ this.update_st('attack')} /><br />
          <input type="text" placeholder="Defense" value={ this.state.defense }
            onChange={ this.update_st('defense')} /><br />
          <input type="text" placeholder="Move 1"
              onChange={ this.update_st('move_1')} /><br />
            <input type="text" placeholder="Move 2"
              onChange={ this.update_st('move_2')} /><br />
          <button>Create</button>
        </form>

      </div>

    );
  }
}

export default withRouter(PokemonForm);
