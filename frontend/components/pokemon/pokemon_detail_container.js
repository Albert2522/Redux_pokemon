import { connect } from 'react-redux';

import { receiveSinglePokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return {
  pokemon: state.singlePokemon
}; };

const mapDispatchToProps = dispatch => ({
  // receiveAllPokemons: (pokemon) => dispatch(receiveAllPokemon(pokemon)),
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
