//Usa un bucle forof para recorrer todos los juguetes y añade los que tengan más de 15 ventas (`sellCount`) al array `popularToys`. 
//Imprimelo por consola.


const popularToys = new Array();
const toys = [{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
            {id: 11, name: 'Action Woman', sellCount: 24}, 
            {id: 23, name: 'Barbie Man', sellCount: 15}, 
            {id: 40, name: 'El gato con Guantes', sellCount: 8},
            {id: 40, name: 'El gato felix', sellCount: 35}]


for (let toy of toys){
    if (toy.sellCount > 15){    //si queremos que se incluyan tambien lo que acumulan 15 ventas habría que cambiar el comparador por "=>""
        popularToys.push(toy);
    }
}
console.log(popularToys);
