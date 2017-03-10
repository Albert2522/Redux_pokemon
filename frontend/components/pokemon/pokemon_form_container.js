import { connect } from 'react-redux';

import { receivePokemon, sendPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';


const mapDispatchToProps = dispatch => {

  return {
    sendPokemon: (data) => dispatch(sendPokemon(data))
};
};




export default connect(
  null, mapDispatchToProps
)(PokemonForm);
