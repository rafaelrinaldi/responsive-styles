import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import combine from 'combine-same-keys'
import responsiveStyles from '../'

const breaks = [48, 64, 80]
const r = (props, values) => responsiveStyles(props, values, breaks)

const styles = StyleSheet.create({
  root: {
    width: '100%',
    fontFamily: 'SF Mono, monospace'
  },

  fcss: {
    padding: 75,
    ':before': {
      ...r('content', ['"Small"', '"Medium"', '"Large"', '"Extra Large"'])
    }
  },

  withCombine: {
    ...combine(
      r('color', ['#FFF', '#005782', '#820005', '#16160B']),
      r('backgroundColor', ['#FF0066', '#27D88E', '#FFF5C3', '#E1E1E1'])
    )
  }
})

const App = () => (
  <div className={css(styles.root)}>
    <h1>Aphrodite</h1>
    <div className={css(styles.fcss, styles.withCombine)} />
  </div>
)

render(<App />, document.querySelector('[data-app-aphrodite]'))
