import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import  merge  from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      nextState = action.pokemon;
      return nextState;
    case RECEIVE_POKEMON:
      nextState = merge({}, state);
      nextState[action.singlePokemon.id] = action.singlePokemon;
      return nextState;
    default:
      return state;
  }

};

export default pokemonReducer;
