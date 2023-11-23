//Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

//De tal modo que si tenemos el texto "Abel Cabeza" obtendremos dos variables...una con el valor "Abel" y otra con el valor "Cabeza".

//En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()


function splitName(fullName) {
    // Dividir el nombre completo en un array utilizando el espacio como separador
    const nameArray = fullName.split(' ');
  
    // Asegurarse de que haya al menos dos elementos en el array
    if (nameArray.length >= 2) {
      // Obtener el nombre y el apellido
      const firstName = nameArray[0];
      const lastName = nameArray.slice(1).join(' '); // Join los elementos restantes en caso de que haya más de un apellido
  
      return { firstName, lastName };
    } else {
      // Manejar el caso en el que no se proporciona un nombre completo válido
      console.error('Error: Nombre completo no válido');
      return null;
    }
  }
  
  // Ejemplo de uso
  const fullName = "Abel Cabeza";
  const { firstName, lastName } = splitName(fullName);
  
  console.log("Nombre:", firstName); // Salida: Abel
  console.log("Apellido:", lastName); // Salida: Cabeza