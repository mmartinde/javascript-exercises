//En base a la api de Rick and Morty (https://rickandmortyapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar //el endpoint 'https://rickandmortyapi.com/api/character/'.

//Si te fijas en la respuesta de la api, la imagen está en la propiedad 'image' y el título en la propiedad 'name'.


document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Fetch data from the Rick and Morty API
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            // Iterate through the characters and create a card for each
            console.log (data[0]);
            
            /* data.results.forEach(character => {
                const card = createCharacterCard(character);
                gallery.appendChild(card);
            }); */
        })
        .catch(error => console.error("Error fetching data:", error));

    // Function to create a character card
    function createCharacterCard(character) {
        const card = document.createElement("div");
        card.className = "character-card";

        const image = document.createElement("img");
        image.src = character.image;
        image.alt = character.name;
        image.className = "character-image";

        const name = document.createElement("div");
        name.className = "character-name";
        name.textContent = character.name;

        card.appendChild(image);
        card.appendChild(name);

        return card;
    }
});
