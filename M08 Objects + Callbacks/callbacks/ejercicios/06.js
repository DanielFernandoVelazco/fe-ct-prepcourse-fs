function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  let respuesta = [];

  for (let elemento of array) {    
    respuesta.push(cb(elemento));
  };

  return respuesta;
}

module.exports = map;
