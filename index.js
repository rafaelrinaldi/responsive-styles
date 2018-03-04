import media from './media'
import definition from './definition'

export default function responsive (propertyOrValues, maybeValues, breaks) {
  const values =
    typeof propertyOrValues === 'string' ? maybeValues : propertyOrValues
  const initial = values[0]

  return values
    .slice(1)
    .map((value, index) => {
      return (
        value !== null && {
          [media(breaks[index])]: definition(value, propertyOrValues)
        }
      )
    })
    .reduce(
      (accumulator, value) => ({
        ...accumulator,
        ...value
      }),
      initial !== null ? definition(initial, propertyOrValues) : {}
    )
}
