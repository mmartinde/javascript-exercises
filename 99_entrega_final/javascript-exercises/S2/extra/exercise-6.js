/* Crea una función llamada ``swap`` que reciba 3 parametros. Un array y dos parametros más que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
 */

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }


  const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
  console.log(swap(array, 0, 3)); // Output: ['Ronalguiño', 'Cristiano Romualdo', 'Fernando Muralla', 'Mesirve']
  console.log(swap(array, 1, 2)); // Output: ['Mesirve', 'Fernando Muralla', 'Cristiano Romualdo', 'Ronalguiño']
  console.log(swap(array, 2, 2)); // Output: ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']