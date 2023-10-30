//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

let totalVentas = 0;
products.forEach(itemventas => {
    totalVentas += itemventas.sellCount  
});
 let mediaVentas = totalVentas / products.length;
console.log (mediaVentas);
