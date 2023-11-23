//Segun la siguiente lista, ordena los elementos en base a la propiedad .order.


const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]

// Ordenar el array en base a la propiedad 'order'
const sortedList = list.sort((a, b) => a.order - b.order);

console.log("Lista ordenada:", sortedList);