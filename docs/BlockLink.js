import nano from 'nano-component'
import Box from './Box'

const BlockLink = nano(Box)({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
})

BlockLink.defaultProps = {
  is: 'a'
}

export default BlockLink
