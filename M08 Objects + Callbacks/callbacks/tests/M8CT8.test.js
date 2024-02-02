const buscarElemento = require("../ejercicios/08");

test('Debe busca un elemento en el array y retornalo.', function(){
  const array1 = [1, 2, 3, 4, 5];
  const callback1 = (element) => element === 3;
  expect(buscarElemento(array1, callback1)).toBe(3);
});

test('Debe busca un elemento en el array y retornalo.', function(){
  const array2 = [1, 2, 3, 4, 5];
  const callback2 = (element) => element === 6;
  expect(buscarElemento(array2, callback2)).toBe("No se encontró el elemento");
});

test('Debe busca un elemento en el array y retornalo.', function(){
  const array3 = [];
  const callback3 = (element) => element === 1;
  expect(buscarElemento(array3, callback3)).toBe("No se encontró el elemento");
});