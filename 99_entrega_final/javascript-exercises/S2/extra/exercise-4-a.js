//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.


function findArrayIndex(array, text) {
    return array.findIndex(function(element){
        return element === text;
    });
}




const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(array, 'Mosquito')); // Output: 1
console.log(findArrayIndex(array, 'Ajolote')); // Output: 3
console.log(findArrayIndex(array, 'Rana')); // Output: -1, pues no se encuentra en el array
