const myMain$$ = document.querySelector("main");

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
    const divCards$$ = document.createElement("div");
    
    let pokeId = character[1].id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }
    divCards$$.innerHTML = `
        <div class="pokemon ${character[1].name}">
            <img src="${character[1].sprites.other.home.front_default}" alt="${character.name}">
            <p class="id">#${pokeId}</p>
            <h2 class="name">${character[1].name}</h2>
            <p class="type01">tipo: ${character[1].types[0].type.name}</p>
            <p class="ability01">habilidad: ${character[1].abilities[0].ability.name}</p>
            <p class="base_experience">Level: ${character[1].base_experience}</p>
            <p class="weight">Weight: ${character[1].weight}</p>
            <p class="height">Height: ${character[1].height}</p>
        </div>
   `;
   //<p class="ability02">${character[1].abilities[1].ability.name}</p>
console.log (character[1].order);
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

//catchPokemon();
const init = async () => {
  const pokemons = await fetchPokemons(); //get info without map
  //console.log (pokemons);

  const drawPokemon = drawPokemons(pokemons);

  //const mappedPokemons = mapPokemons (pokemons);
};

init();
