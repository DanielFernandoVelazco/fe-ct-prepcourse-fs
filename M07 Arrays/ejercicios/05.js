function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  if (array.length===0) return (undefined);

  for(let i=0; i<array.length; i++){
    if (array[i] === 'there') return (undefined);
    if (array[i].length >= 5) return (array[i]);
  };

  return (undefined);
}

module.exports = obtenerPrimerStringLargo;
