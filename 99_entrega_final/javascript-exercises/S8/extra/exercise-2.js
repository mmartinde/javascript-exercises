//Si tienes windows. Lo primero que tienes que hacer es abrir powerShell como ADMINISTRADOR y ejecutar el comando `Set-ExecutionPolicy Unrestricted`. Elige la opciòn SI y dale a intro. Si tu ordenador está en español La opción SI será //escribiendo una `S` y si está en ingles una `Y`.

//Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando `npm i -g json-server` y una vez lo tengas instalado ya puedes hacer todos los ejercicios que requieeran de json-server.

//En este ejercicio vamos a pintar todas las propiedades de las peliculas.

//De nuevo, tendremos una api local que deberemos ejecutar con json-server `json-server --watch exercise-3.json`. La url en cuestión de los personajes sería
//`http://localhost:3000/movies`. Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.

//Las imagenes, para visualizarse tienen que tener la url `http://localhost:3000` + el valor de la propiedad .img de cada una de las imágenes

//`Si tienes windows es posible que tambien tengas que ejecutar `set-executionpolicy unrestricted –force` en una terminal abierta como administrador.`

$(document).ready(function () {
  const gallery = $("#films");

  // Fetch data from Local server movies
  $.ajax({
    url: "http://localhost:3000/movies",
    method: "GET",
    dataType: "json",
    success: function (data) {
      // Iteracion peliculas
      $.each(data, function (omdex, movie) {
        const movieElement = $("<div>").addClass("movie");

        const titleElement = $("<h2>").text(movie.title);
        const descriptionElement = $("<p>").text(movie.description);
        const dateElement = $("<p>").text("Año: " + movie.date);
        const ratingElement = $("<p>").text("Rating: " + movie.rating);

        const imageElement = $("<img>").attr({
          src: movie.img,
          alt: movie.title,
        });
        // Agrega los elementos al contenedor principal
        movieElement.append(
          titleElement,
          descriptionElement,
          imageElement,
          dateElement,
          ratingElement
        );

        // Agrega la película al contenedor principal (galería)
        gallery.append(movieElement);
      });
    },
  });
});
