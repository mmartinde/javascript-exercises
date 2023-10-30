/* Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()``
 */


function rollDice (numFaces){
    return Math.floor(Math.random() * numFaces) + 1;
}

console.log(rollDice(6)); // Output: Un número aleatorio entre 1 y 6
console.log(rollDice(12)); // Output: Un número aleatorio entre 1 y 12
console.log(rollDice(24)); // Output: Un número aleatorio entre 1 y 24