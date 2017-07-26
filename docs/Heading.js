import nano from 'nano-component'
import Text from './Text'

const Heading = nano(Text)({})

Heading.defaultProps = {
  is: 'h2',
  mt: 0,
  mb: 0,
}

export default Heading
