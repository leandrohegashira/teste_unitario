const { exportAllDeclaration } = require('@babel/types')
const cloneArray = require('./cloneArray')

test('Verificando se clone deu certo', () => {
  const array = [1, 2, 3]
  expect(cloneArray(array)).toEqual(array)
  expect(cloneArray(array)).not.toBe(array)
})