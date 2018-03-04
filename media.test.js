import media from './media'

test('Defaults should just work', () => {
  expect(media(42)).toEqual('@media screen and (min-width: 42em)')
})

test('If value is zero, there should not be a unit', () => {
  expect(media(0)).toEqual('@media screen and (min-width: 0)')
})

test('If unit is specified it should be respected', () => {
  expect(media('1024px')).toEqual('@media screen and (min-width: 1024px)')
})
