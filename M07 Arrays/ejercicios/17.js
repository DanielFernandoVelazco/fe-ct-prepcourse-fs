function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let array = [];

  for(let i=0; i<=10; i++){
    array.push(6*i);
  };

  return (array);
}

module.exports = tablaDelSeis;

tablaDelSeis()