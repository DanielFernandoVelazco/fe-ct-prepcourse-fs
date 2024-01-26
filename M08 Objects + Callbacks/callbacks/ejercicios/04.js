function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  let respuesta = 0;

  for (let suma of arrayOfNumbers) {
    respuesta = respuesta + suma;    
  };

  cb(respuesta);
}

module.exports = sumarArray;
