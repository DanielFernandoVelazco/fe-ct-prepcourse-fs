function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let mes = [];

  if(array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre')){
    
    mes.push(array.indexOf('Enero'));
    mes.push(array.indexOf('Marzo'));
    mes.push(array.indexOf('Noviembre'));

    mes.sort();

    for(let i=0; i<mes.length; i++){
      mes[i] = array[mes[i]];
    };
    
    return mes;
  } else {

  return "No se encontraron los meses pedidos";
  };
}

module.exports = mesesDelAño;
