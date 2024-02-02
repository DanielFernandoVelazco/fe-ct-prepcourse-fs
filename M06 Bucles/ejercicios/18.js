function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let respuesta  = 1;

  for(;a<=b;a++){
    respuesta = (a)*respuesta;
  };

  return Math.abs(respuesta);
}

module.exports = productoEntreNúmeros;