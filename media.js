// Helper to write down a media query definition
export default function media (value, feature = 'min-width', unit = 'em') {
  return `@media screen and (${feature}: ${value}${value > 0 ? unit : ''})`
}
