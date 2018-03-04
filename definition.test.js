import definition from './definition'

test('Should be able to render a definition given a property and a value', () => {
  expect(definition('red', 'color')).toEqual({ color: 'red' })
})

test('Should be able to render a definition given a plain object as value', () => {
  const value = {
    fontSize: 16,
    letterSpacing: 0
  }

  expect(definition(value)).toEqual(value)
})
