import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = singlePokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  singlePokemon
});

export const receivePokemon = singlePokemon => ({
  type: RECEIVE_POKEMON,
  singlePokemon
});


export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = id => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id)
    .then(singlePokemon => dispatch(receiveSinglePokemon(singlePokemon)));
};

export const sendPokemon = data => (dispatch) => {
  return APIUtil.createPokemon(data)
    .then(singlePokemon => {
      dispatch(receivePokemon(singlePokemon));
      return singlePokemon;
    });
};
