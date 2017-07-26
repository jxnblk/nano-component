import nano from 'nano-component'
import Box from './Box'

const align = props => props.align
  ? { alignItems: props.align }
  : null

const wrap = props => props.wrap
  ? { flexWrap: 'wrap' }
  : null

const Flex = nano(Box)({
  display: 'flex'
}, align, wrap)

export default Flex
