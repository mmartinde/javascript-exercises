//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 
let a=10;
let b=5;
const sumarAyB =(a,b) => a + b;

//- Ejecuta esta función sin pasar ningún parametro
console.log(sumarAyB(a,b));
//- Ejecuta esta función pasando un solo parametro
console.log(sumarAyB(20,b));
//- Ejecuta esta función pasando dos parametros
console.log(sumarAyB(20,34));
