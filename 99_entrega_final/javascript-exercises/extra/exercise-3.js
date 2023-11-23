//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

// Función para contar las letras "a" en una cadena
const countA = (acc, str) => acc + (str.split('a').length - 1);

// Usar reduce para sumar las ocurrencias de "a" en cada cadena
const totalA = animals.reduce(countA, 0);

console.log("Número total de letras 'a':", totalA);