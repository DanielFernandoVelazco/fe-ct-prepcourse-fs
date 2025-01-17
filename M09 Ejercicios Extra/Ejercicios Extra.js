/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let keys = Object.keys(objeto);
  let conj = [];
  let resp = [];

  for(let i=0; i<keys.length; i++) {
    let a = keys[i];
    conj.push(objeto[a]);
  };

  for(let i=0; i<keys.length; i++) {
    resp.push([keys[i], conj[i]]);
  };

  return (resp);

}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let arrayCaracter = [];
  let objeto = {};

  string = string.split('');
  arrayCaracter = [...new Set(string)];
  string = string.join(''); 

  for (let letra of arrayCaracter) {

    let regExp = new RegExp(letra, 'g');
    let cantidad = string.match(regExp).length;

    objeto[letra] = cantidad;
  };

  return (objeto);
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let regExpMay = /[A-Z]/g;
  let Mayuscula = string.match(regExpMay).join('');

  let regExpMin = /[a-z]/g;
  let minuscula = string.match(regExpMin).join('');

  return (Mayuscula+minuscula);
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  let nuevaFrase = [];

  frase = frase.split(' ')

  for (let palabraFrase of frase) {    
    nuevaFrase.push(palabraFrase.split('').reverse().join(''));
  };

  return (nuevaFrase.join(' '));
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  numero = numero.toString();

  return (numero === numero.split('').reverse().join(''))
    ?'Es capicua'
    :'No es capicua';
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  return (string.replace(/[abc]/g,''));
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let objeto = {};
  let nuevoarray = [];

  for (let i=0; i<arrayOfStrings.length; i++) {
    nuevoarray.push(arrayOfStrings[i].length * 1000 + i);
    objeto[nuevoarray[i]] = arrayOfStrings[i];
  };

  return (Object.values(objeto));
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  arrayTotal = [];

  for (let i of array1) {
    let repetido = array2.includes(i);
    if(repetido) arrayTotal.push(i);
  };

  return (arrayTotal)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

