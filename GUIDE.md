[combine-same-keys]: https://github.com/rafaelrinaldi/combine-same-keys
[fcss]: https://github.com/chibicode/react-functional-css-protips
[styled-system]: https://github.com/jxnblk/styled-system

# Guide
> Detailed guide on how to get the most out of `responsive-styles`

## Defining breakpoints

In order for the library to work you must always specify a list of breakpoints you want to support. This can become very repetitive, so our suggestion is that you simply create a function that composes on `responsive-styles` so you can reference it instead:

```js
// your-project/src/responsive.js
import responsiveStyles from 'responsive-styles'

// A list with the breakpoints you wish to support
const breaks = [48, 64, 80]

// Compose a new function on top of `responsiveStyles` passing down your breakpoints
const responsive = (props, values) => responsiveStyles(props, values, breaks)

export default responsive
```

For the sake of brevity, moving forward in the next code snippets we will assume you have a `responsive.js` file living within your own project and that you chose Aphrodite.

### Mobile first

One of the assumptions is that you approach design using a mobile first mindset, so the first item you pass to the list would be applied by default to whatever property you're defining values for. That's the reason why the first value on the breakpoints list should not be zero, since it would be redundant.

### Use `null` to bypass definitions

You can use `null` to bypass definitions for specific breakpoints. Example:

```js
import responsive './responsive'

responsive('color', [null, 'green', 'blue'])

// Outputs:
// {
//   '@media screen and (min-width: 48em)': { color: 'green' },
//   '@media screen and (min-width: 64em)': { color: 'blue' },
// }
```

### Functional CSS

`responsive-styles` plays really well with the concept of [Functional CSS][fcss], which favors creating one CSS class per property definition.

Creating classes is cheap, gives us more control, separate visual concerns and can potentially improve reusability.

Even though the Functional CSS approach is encouraged, the API is flexible enough to allow for all sorts of different use cases:

### What’s encouraged

```js
// Every rule has its own class name
import { StyleSheet } from 'aphrodite'
import responsive from './responsive'

const styles = StyleSheet.create({
  color: responsive('color', ['red', 'green', 'blue']),
  opacity: responsive('opacity', [0, 0.5, 1]),
  width: responsive('width', ['25vw', '50vw', '100vw'])
})
```

### What’s possible

You can combine multiple rules within the same media break by utilizing the [`combine-same-keys`][combine-same-keys] library:

```js
import { StyleSheet } from 'aphrodite'
import combineSameKeys from 'combine-same-keys'
import responsive from './responsive'

const styles = StyleSheet.create({
  root: combineSameKeys(
    responsive('color', ['red', 'green', 'blue']),
    responsive('opacity', [0, 0.5, 1]),
    responsive('width', ['25vw', '50vw', '100vw'])
  )
})
```

#### “It’s just JavaScript”

We can benefit from having things isolated in small functions by exploring different possibilities when composing styles. For instance, you can use partial application for reducing boilerplate and making things look more concise:

```js
import { StyleSheet } from 'aphrodite'
import responsive from './responsive'

const color = values => responsive('color', values)
const opacity = values => responsive('opacity', values)

const styles = StyleSheet.create({
  color: color(['red', 'green', 'blue']),
  opacity: opacity([0, 0.5, 1])
})
```

### Passing down plain objects

It's encouraged that you split up your styling into classes instead of a group of rules – in a more functional fashion – but you can also pass down plain objects for each breakpoint, which can be useful sometimes (specially for intereoperability with other libraries):

```js
import { StyleSheet } from 'aphrodite'
import responsive from './responsive'

const textVariations = [
  { fontSize: 16, letterSpacing: 0 },
  { fontSize: 18, letterSpacing: 0.5 },
  { fontSize: 22, letterSpacing: 1, fontWeight: 'bold' }
]

const styles = StyleSheet.create({
  root: {
    color: '#FFF',
    backgroundColor: '#FF0066',
    ...responsive(textVariations)
  }
})
```

## Related projects

- [styled-system][styled-system]
