function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  if(array.length===0) return undefined;

  let numAleatorio = Math.trunc(Math.random()*10);

  while (numAleatorio>=array.length){
    numAleatorio = Math.trunc(Math.random()*10);
  };
  return (array[numAleatorio]);
}

module.exports = obtenerElementoAleatorio;
