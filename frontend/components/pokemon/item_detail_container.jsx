import { connect } from 'react-redux';
import { receiveSinglePokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import ItemDetail  from './item_detail';

const mapStateToProps = state => {
  return {
  items: state.singlePokemon.items
}; };


export default connect( mapStateToProps)(ItemDetail);
