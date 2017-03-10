
export const fetchAllPokemon = () => (
  $.ajax({
    url: "/api/pokemon",
    type: "GET",
    dataType: "json"
  })
);

export const fetchSinglePokemon = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    type: "GET",
    dataType: "json"
  });
};

export const createPokemon = (data) => {
  let data1 = {"pokemon": data};
  return $.ajax({
    url: `/api/pokemon/`,
    type: "POST",
    dataType: "json",
    data: data1
  });
};
