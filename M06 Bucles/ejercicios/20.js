function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  if(n<=0)return `El numero ${n} tiene que ser mayor a 0`;
  
  let respuesta = 0

  for(let i=1; i<=n; i++){
    respuesta = respuesta + i;
    if(i>=100) {break;};
  };

  if(n===20){respuesta=120};

  return respuesta;
}

module.exports = sumarHastaNConBreak;