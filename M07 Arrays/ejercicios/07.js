function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  for(let i=0; i<array.length; i++) {

    array[i] = array[i].toUpperCase();
  };

  return array
}

module.exports = convertirStringAMayusculas;
