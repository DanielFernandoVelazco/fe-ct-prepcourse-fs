function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  num = num.toString();

  return (num.length === 3)
    ?true
    :false;
}

module.exports = tieneTresDigitos;
