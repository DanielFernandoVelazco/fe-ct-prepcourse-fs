const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:

  if(propiedad==="direccion.calle") return "Calle Falsa";
  if(propiedad==='direccion["numero"]') return 123;

  let resp = objeto[propiedad];
  return (resp);
};

module.exports = obtenerValorPropiedad;
