import nano from 'nano-component'
import Box from './Box'

const Link = nano(Box)({
  textDecoration: 'none',
  color: 'inherit',
  ':hover': {
    textDecoration: 'underline',
  }
})

Link.defaultProps = {
  is: 'a'
}

export default Link
