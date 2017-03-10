import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import  merge  from 'lodash/merge';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      nextState = merge({}, state);
      nextState = action.singlePokemon;
      return nextState;
    default:
      return state;
  }

};

export default PokemonDetailReducer;
