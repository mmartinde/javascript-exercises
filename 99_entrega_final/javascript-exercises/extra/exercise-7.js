//Dado el siguiente string
//transformalo en el siguiente (Mayusculas incluidas)

//`Gracioso Pero No Gracioso De Risa Gracioso De Raro`

const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

const words = text.split('-');

const capitalizeWords = words.map (word => word.charAt(0).toUpperCase()+ word.slice(1));

const result = capitalizeWords.join (' ');


console.log (result);
