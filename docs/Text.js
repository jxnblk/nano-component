import nano from 'nano-component'
import Box from './Box'

const caps = props => props.caps ? {
  textTransform: 'uppercase',
  letterSpacing: '.3em'
} : null

const Text = nano(Box)(
  caps
  // align
)

export default Text
