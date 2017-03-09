export const selectAllPokemon = (state) => {
  let answer = [ ];
  Object.keys(state.pokemon).forEach(el => {
    answer.push(state.pokemon[parseInt(el)]);
  });
  return answer;
};
