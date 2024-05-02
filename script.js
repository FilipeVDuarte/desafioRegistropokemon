
let pokemon = [];


function addPokemon(name, level, hp, gender, ...items) {
  let pokemonInfo = { name, level, hp };
  if (gender) pokemonInfo.gender = gender;
  if (items.length > 0) pokemonInfo.items = items;
  pokemon.push(pokemonInfo);
  console.log(`${name} Cadastrado com sucesso`);
}


addPokemon("Pookchyena", 2, 13, "Male");
addPokemon("Zigzagoon", 2, 13, "Female");
addPokemon("Dragonite", 5, 25, "Male", "Item1", "Item2");
addPokemon("Dragonite", 5, 24, "Female", "Item1", "Item2");
addPokemon("Dragonite", 5, 24, "Female", "Item1", "Item2");
addPokemon("Poochyena", 3, 15, "Female");
addPokemon("Wurmple", 2, 7, "Male", "Item1");