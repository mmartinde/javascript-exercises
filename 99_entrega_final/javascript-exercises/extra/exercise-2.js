//En base al siguiente javascript, modifícalo para crea una función para que podamos enviarle como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos de envio (4.95). De esta forma estaremos optimizando //el codigo y reutilizandolo.



function calculateTotalPrice(price) {
    const ivaPrice = price * 1.21;
    const totalPrice = ivaPrice + 4.95;
    return totalPrice;
  }
  
  // Ejemplos de uso
  const price1 = 8;
  const totalPrice1 = calculateTotalPrice(price1);
  console.log("Precio total 1:",Number(totalPrice1.toFixed(2)));
  
  const price2 = 20;
  const totalPrice2 = calculateTotalPrice(price2);
  console.log("Precio total 2:",Number(totalPrice2.toFixed(2)));