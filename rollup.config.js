import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const name = 'responsiveStyles'

const output = {
  umd: pkg.main,
  es: pkg.module
}

export default {
  input: 'index.js',
  output: [
    {
      file: output.umd,
      format: 'umd',
      name
    },
    {
      file: output.es,
      format: 'es'
    }
  ],
  plugins: [babel()]
}
