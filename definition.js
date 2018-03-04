// Helper to render a definition given a value and a property name
export default function definition (value, property) {
  return typeof value === 'object' ? value : { [property]: value }
}
