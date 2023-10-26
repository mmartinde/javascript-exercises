Usa un forin para imprimir por consola los datos del alienigena.
```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
  if (alien.hasOwnProperty(key)) {
    console.log(key + ': ' + alien[key]);
  }
}
```
