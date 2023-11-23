$(document).ready(function () {
    const gallery = $("#diary");
  
    // Fetch data from Local server movies
    $.ajax({
      url: "http://localhost:3000/diary",
      method: "GET",
      dataType: "json",
      success: function (data) {
        // Iteracion peliculas
        $.each(data, function (omdex, diary) {
          const diaryElement = $("<div>").addClass("diary");
  
          const titleElement = $("<h2>").text(diary.title);
          const descriptionElement = $("<p>").text(diary.description);
          const dateElement = $("<p>").text("Año: " + diary.date);
            
          // Agrega los elementos al contenedor principal
          diaryElement.append(
            titleElement,
            descriptionElement,
            dateElement,
          
          );
  
          // Agrega la película al contenedor principal (galería)
          gallery.append(diaryElement);
        });
      },
    });
  });
  