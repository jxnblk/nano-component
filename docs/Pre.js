import nano from 'nano-component'
import Box from './Box'

const Pre = nano(Box)({
  fontFamily: `'Roboto Mono', 'SF Mono', Menlo, monospace`,
  fontSize: 16,
  overflow: 'auto',
})

Pre.defaultProps = {
  is: 'pre',
  m: 0
}

export default Pre
