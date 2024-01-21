function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  let i=1;

  while (Math.pow(2,i)<=numero){
    
    if(numero%Math.pow(2,i)!==0){
      return false;
    };
    i++;
  };
  
  return true;
}

module.exports = esPotenciaDeDos;
