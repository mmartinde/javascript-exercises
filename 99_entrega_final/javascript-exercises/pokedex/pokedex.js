const myMain$$ = document.querySelector("#pokedex");

const fetchPokemons = async (limit = 150) => {
  try {
    const pokemonMap = new Map();

    for (let i = 0; i < limit; i++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i + 1}/`
      );
      const pokemonData = await response.json();
      //console.log (pokemonData);
      pokemonMap.set(i + 1, pokemonData);
      //pokemonMap.set(i , pokemonData.name);
    }
    return pokemonMap;
  } catch (error) {
    console.error(error);
  }
};

const drawPokemons = (mappedPokemons) => {
  myMain$$.innerHTML = "";
  for (const character of mappedPokemons) {
    //console.log(character[1].sprites.other.home.front_default);
    const divCards$$ = document.createElement("li");

    let pokeId = character[1].id.toString();
    if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
    }
    divCards$$.innerHTML = `
        <div class="pokemon">
          <p class="pokemon-id-bck">#${pokeId}</p>
          <div class="pokemon-img">
          <img src="${character[1].sprites.other.home.front_default}" alt="${character[1].name}">
          </div>
          <div class="pokemon-inf">
            <div class="pokemon-name">
              <p class="pokemon-id">#${pokeId}</p>
              <h2 class="name">${character[1].name}</h2>
            </div>
            <div class="pokemon-typ">
              <p class="${character[1].types[0].type.name} type">${character[1].types[0].type.name}</p>
              <p class="type">${character[1].abilities[0].ability.name}</p>
            </div>
            <div class="pokemon-stats">
              <p class="stat">${character[1].height}M</p>
              <p class="stat">${character[1].weight}KG</p>
              <p class="stat">${character[1].base_experience}HP</p>
            </div>
          </div>
        </div>
   `;
    //<p class="ability02">${character[1].abilities[1].ability.name}</p>
    //console.log(character[1].order);
    myMain$$.appendChild(divCards$$);
  }

  /*  console.log ("mapa",getPokemonsWithoutMap);
  console.log ("mapeando nombre:",getPokemonsWithoutMap.get(1).name);
  console.log ("mapeando id:",getPokemonsWithoutMap.get(1).id);
  console.log ("mapeando imagen:",getPokemonsWithoutMap.get(1).sprites.front_default);
  console.log ("mapeando tipo 1:",getPokemonsWithoutMap.get(1).types[0].type.name);
  console.log ("mapeando habilidad 1:",getPokemonsWithoutMap.get(1).abilities[0].ability.name);
  console.log ("mapeando tipo 2:",getPokemonsWithoutMap.get(1).types[1].type.name);
  console.log ("mapeando habilidad 2:",getPokemonsWithoutMap.get(1).abilities[1].ability.name);
  console.log ("mapeando weight:",getPokemonsWithoutMap.get(1).weight);
  console.log ("mapeando height:",getPokemonsWithoutMap.get(1).height); */

  //id: character.get(element).id,
  //imagen: character.get(element).sprites.front_default,
  //tipo: character.types[0].type.name,

  //console.log("funcion map",mappedPokemons);
};

const drawInputSearch = (characters) => {
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () =>
    searchPokemon(characters, input$$.value)
  );
};

const searchPokemon = (characters, filtro) => {
  console.log("filtro", filtro);
  const characterArray = Array.from(characters.entries());
  let filteredCharacter = characterArray.filter(([clave, character]) =>
    character.name.toLowerCase().includes(filtro.toLowerCase())
  );
  drawPokemons(filteredCharacter);
};

const init = async () => {
  const pokemons = await fetchPokemons(); //get info without map
  //console.log (pokemons);

  const drawPokemon = drawPokemons(pokemons);

  //const mappedPokemons = mapPokemons (pokemons);

  drawInputSearch(pokemons);
};

init();
