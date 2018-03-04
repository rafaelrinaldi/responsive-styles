import responsive from './'

const breaks = [48, 64, 80]
const r = (props, values) => responsive(props, values, breaks)

test('Should return different values per breakpoint', () => {
  const input = r('color', ['red', 'green', 'blue'])
  const output = {
    color: 'red',
    '@media screen and (min-width: 48em)': { color: 'green' },
    '@media screen and (min-width: 64em)': { color: 'blue' }
  }

  expect(input).toEqual(output)
})

test('Should work properly given custom breakpoint values', () => {
  const input = r('color', ['red', 'green', 'blue'])
  const output = {
    color: 'red',
    '@media screen and (min-width: 48em)': { color: 'green' },
    '@media screen and (min-width: 64em)': { color: 'blue' }
  }

  expect(input).toEqual(output)
})

test('Should bypass instances of `null`', () => {
  const input = r('color', ['red', null, 'blue'])
  const output = {
    color: 'red',
    '@media screen and (min-width: 64em)': { color: 'blue' }
  }

  expect(input).toEqual(output)
})

test('Should also bypass instaces of `null` for initial breakpoints', () => {
  const input = r('color', [null, 'green', 'blue'])
  const output = {
    '@media screen and (min-width: 48em)': { color: 'green' },
    '@media screen and (min-width: 64em)': { color: 'blue' }
  }

  expect(input).toEqual(output)
})

test('Should handle cases where values are plain objects', () => {
  const values = [
    { fontSize: 16, letterSpacing: 0 },
    { fontSize: 18, letterSpacing: 0.5 },
    { fontSize: 22, letterSpacing: 1, fontWeight: 'bold' }
  ]

  const input = r(values, null)
  const output = {
    ...values[0],
    '@media screen and (min-width: 48em)': { ...values[1] },
    '@media screen and (min-width: 64em)': { ...values[2] }
  }

  expect(input).toEqual(output)
})

test('Should consider 0 as a valid value', () => {
  const input = r('width', [1, 0, null, 2])
  const output = {
    width: 1,
    '@media screen and (min-width: 48em)': { width: 0 },
    '@media screen and (min-width: 80em)': { width: 2 }
  }

  expect(input).toEqual(output)
})

test('Should consider negative values as valid', () => {
  const input = r('letterSpacing', [1, 0, -1.5])
  const output = {
    letterSpacing: 1,
    '@media screen and (min-width: 48em)': { letterSpacing: 0 },
    '@media screen and (min-width: 64em)': { letterSpacing: -1.5 }
  }

  expect(input).toEqual(output)
})
