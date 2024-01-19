function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  return (new Date(fecha)<=fecha && new Date(fecha)>=fecha)
    ? true
    : false;
}

module.exports = esFechaValida;