function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  if(n<=0) return 0;

  let respuesta = 0;

  for(;1<=n;n--){
    respuesta = respuesta + n;
  };

  return respuesta;
}

module.exports = sumarHastaN;
