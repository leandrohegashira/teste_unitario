const subtract = require('./subtract')

test('Subtração é válida?', () =>{
  expect(subtract(1, 2)).toBe(-1)
})

