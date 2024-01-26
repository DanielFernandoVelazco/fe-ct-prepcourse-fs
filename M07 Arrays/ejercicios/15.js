function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let a = 0;

  for(let i=0; i<(array.length-1); i++){
    
    a=i+1;
    
    if(array[i]!==array[a]) return false;
  };

  return true;
}

module.exports = todosIguales;
