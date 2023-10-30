/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function findArrayIndex(array, text) {
  return array.findIndex(function (element) {
    return element === text;
  });
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index > -1) {
    array.splice(index, 1);
  } else console.log(`No existe elemento ${text} en el array`);
  return array;
}

const array = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
console.log(removeItem(array, "Mosquito")); // Output: ['Caracol', 'Salamandra', 'Ajolote']
console.log(removeItem(array, "Ajolote")); // Output: ['Caracol', 'Salamandra']
console.log(removeItem(array, "Rana")); // Output: ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
