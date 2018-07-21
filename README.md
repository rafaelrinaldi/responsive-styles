[aphrodite]: https://github.com/Khan/aphrodite
[brent]: http://jxnblk.com
[combine-same-keys]: https://github.com/rafaelrinaldi/combine-same-keys
[emotion]: https://github.com/emotion-js/emotion
[glamor]: https://github.com/threepointone/glamor
[react]: http://reactjs.org
[rebass]: http://jxnblk.com/rebass
[url]: https://rinaldi.io

# Responsive Styles [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/responsive-styles/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/responsive-styles)
> Use arrays as values to specify mobile-first responsive styles for CSS-in-JS projects

The main idea of this library is to provide a framework agnostic way to easily enable any property to become responsive.

This is **100%** inspired by the awesome work done by [Brent Jackson][brent] on [Rebass][rebass].

## Install

```sh
npm i responsive-styles
```

## Usage

This library was tested against [Aphrodite][aphrodite], [glamor][glamor] and [emotion][emotion] so far and they all seem to work nicely.

<details>
  <summary>Aphrodite and React</summary>

```js
import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import combineSameKeys from 'combine-same-keys'
import responsiveStyles from 'responsive-styles'

const breaks = [48, 64, 80]
const r = (props, values) => responsiveStyles(props, values, breaks)

const styles = StyleSheet.create({
  // A la functional CSS
  padding: r('padding', [8, 24, 48]),
  fontSize: r('fontSize', [16, 24, 36]),

  // Combine multiple definitions into a single class name
  colors: combineSameKeys(
    r('color', ['#FFF', '#005782', '#820005', '#16160B']),
    r('backgroundColor', ['#FF0066', '#27D88E', '#FFF5C3', '#E1E1E1'])
  )
})

const className = css(styles.padding, styles.fontSize, styles.colors)

const App = () => <div className={className}><h1>Aphrodite</h1></div>

render(<App />, document.querySelector('[data-app]'))
```
</details>

<details>
  <summary>glamor and React</summary>

```js
import React from 'react'
import { render } from 'react-dom'
import { css } from 'glamor' // The API is exactly the same for emotion
import combineSameKeys from 'combine-same-keys'
import responsiveStyles from 'responsive-styles'

const breaks = [48, 64, 80]
const r = (props, values) => responsiveStyles(props, values, breaks)

// A la functional CSS
const padding = css({
  ...r('padding', [8, 24, 48]),
})

const fontSize = css({
  ...r('fontSize', [16, 24, 36]),
})

// Combine multiple definitions into a single class name
const colors = css(
  combineSameKeys(
    r('color', ['#FFF', '#005782', '#820005', '#16160B']),
    r('backgroundColor', ['#FF0066', '#27D88E', '#FFF5C3', '#E1E1E1'])
  )
)

const className = `${padding} ${fontSize} ${colors}`

const App = () => <div className={className}><h1>Glamor and Emotion</h1></div>

render(<App />, document.querySelector('[data-app]'))
```
</details>

### Examples

If you want to checkout working examples for all libraries, you can download the project, install its dependencies and run:

```sh
npm start
```

## API

### `responsive(propertyOrValues, [maybeValues], [breaks])`

#### `propertyOrValues`

Type: `String` or `Array`  

Property name or an array with all the values for each breakpoint.

#### `maybeValues`

Type: `Array`  

Array with all the values for each breakpoint.

#### `breaks`

Type: `Array`  

List of breakpoints available, from smallest to largest. You can pass straight up numbers which will default to `em` values, or you can simply pass down a list of strings with the units you want.

## More

For more examples and details about how the project works, please [check our guide](/GUIDE.md).

## License

MIT © [Rafael Rinaldi][url]

---

<p align="center">
  <a href="https://buymeacoff.ee/rinaldi" title="Buy me a coffee">Buy me a ☕</a>
</p>
