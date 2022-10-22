const { exportAllDeclaration } = require('@babel/types')
const sum = require('./sum')

test('Somando dois números corretamente', () => {
  expect(sum(1, 2)).toBe(3)
})