const myMain$$ = document.querySelector("#pokedex");

/*
  This asynchronous function fetchPokemons makes a request to the Pokémon API
  to retrieve data about Pokémon. It takes an optional "limit" parameter that
  specifies the number of Pokémon to fetch. If not provided, the default limit is 150.

  @param {number} limit - The limit of Pokémon to retrieve (optional).
  @returns {Map} - A map containing Pokémon data, where the key is the Pokémon number and the value is the Pokémon information.
*/
const fetchPokemons = async (limit = 150) => {
  try {
    // Create a new map to store Pokémon data
    const pokemonMap = new Map();

    // Iterate through the specified limit and make requests to get Pokémon data
    for (let i = 0; i < limit; i++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i + 1}/`
      );
      const pokemonData = await response.json();

      // Store Pokémon data in the map with the key being the Pokémon number
      pokemonMap.set(i + 1, pokemonData);
    }
    return pokemonMap;
  } catch (error) {
    console.error(error);
  }
};

/*
  This function drawPokemons renders Pokémon cards based on the provided data.
  It creates an HTML structure for each Pokémon and appends it to the main container.

  @param {Map} mappedPokemons - A map containing Pokémon data, where the key is the Pokémon number and the value is the Pokémon information.
*/
const drawPokemons = (mappedPokemons) => {
  myMain$$.innerHTML = "";
  for (const character of mappedPokemons) {
    const divCards$$ = document.createElement("li");
    let pokeId = character[1].id.toString();
    if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
    }
    const type =
      (character[1].types[0] && character[1].types[0].type.name) || "";
    const type2 =
      (character[1].types[1] && character[1].types[1].type.name) || "";
    const imgSrc = character[1].sprites.other.home.front_default;
    const shinyImgSrc = character[1].sprites.other.home.front_shiny;

    divCards$$.innerHTML = `
    <div class="pokemon ${type}">
    <p class="pokemon-id-bck">#${pokeId}</p>
    <div class="pokemon-img">
    <img src="${imgSrc}" alt="${character[1].name}" onmouseover="changeImage(this, '${shinyImgSrc}')"
    onmouseout="changeImage(this, '${imgSrc}')">
    </div>
          <div class="pokemon-inf">
          <div class="pokemon-name">
          <p class="pokemon-id">#${pokeId}</p>
          <h2 class="name">${character[1].name}</h2>
          </div>
          <div class="pokemon-typ">
          <p class="${type} type">${type}</p>
          <p class="${type2} type">${type2}</p>
              </div>
              <div class="pokemon-stats">
              <p class="stat">${character[1].height}M</p>
              <p class="stat">${character[1].weight}KG</p>
              <p class="stat">${character[1].base_experience}HP</p>
              </div>
              </div>
              </div>
              `;
    myMain$$.appendChild(divCards$$);
  }
};

/*
  This function changeImage is a helper function that changes the source of an image element.

  @param {HTMLImageElement} element - The image element to change.
  @param {string} newSrc - The new source for the image.
*/
function changeImage(element, newSrc) {
  element.src = newSrc;
};

/*
  This function drawInputSearch sets up an event listener for the input element to trigger
  the searchPokemon function when the input value changes.

  @param {Map} characters - A map containing Pokémon data, where the key is the Pokémon number and the value is the Pokémon information.
*/
const drawInputSearch = (characters) => {
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () =>
    searchPokemon(characters, input$$.value)
  );
};

/*
  This function searchPokemon filters Pokémon based on the provided filter text and renders the filtered Pokémon.

  @param {Map} characters - A map containing Pokémon data, where the key is the Pokémon number and the value is the Pokémon information.
  @param {string} filter - The filter text to search for in Pokémon names or types.
*/
const searchPokemon = (characters, filter) => {
  const characterArray = Array.from(characters.entries());
  let filteredCharacter;

  // check if filter include "type:"
  if (filter.toLowerCase().startsWith("type:")) {
    const searchType = filter.substring(5).toLowerCase();
    filteredCharacter = characterArray.filter(([key, character]) =>
      (character.types[0] && character.types[0].type.name.toLowerCase() === searchType) ||
      (character.types[1] && character.types[1].type.name.toLowerCase() === searchType)
    );
  } else {
    // Filter by nombre
    filteredCharacter = characterArray.filter(([key, character]) =>
      character.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  drawPokemons(filteredCharacter);
};

/*
  This function init is the entry point of the application. It fetches Pokémon data, draws the initial Pokémon cards,
  and sets up the input search functionality.


  @returns {Promise<void>} - A promise that resolves when the initialization is complete.
*/
const init = async () => {
  const pokemons = await fetchPokemons();
  
  const drawPokemon = drawPokemons(pokemons);

  drawInputSearch(pokemons);
};

// Call the init function to start the application
init();
