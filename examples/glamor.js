import React from 'react'
import { render } from 'react-dom'
import { css } from 'glamor'
import combine from 'combine-same-keys'
import responsiveStyles from '../'

const breaks = [48, 64, 80]
const r = (props, values) => responsiveStyles(props, values, breaks)

const root = css({
  width: '100%',
  fontFamily: 'SF Mono, monospace'
})

const fcss = css({
  padding: 75,
  ':before': {
    ...r('content', ['"Small"', '"Medium"', '"Large"', '"Extra Large"'])
  }
})

const withCombine = css({
  ...combine(
    r('color', ['#FFF', '#005782', '#820005', '#16160B']),
    r('backgroundColor', ['#FF0066', '#27D88E', '#FFF5C3', '#E1E1E1'])
  )
})

const App = () => (
  <div className={root}>
    <h1>Glamor</h1>
    <div className={`${fcss} ${withCombine}`} />
  </div>
)

render(<App />, document.querySelector('[data-app-glamor]'))
