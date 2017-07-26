import nano from 'nano-component'
import Box from './Box'

const Button = nano(Box)({
  textDecoration: 'none',
  display: 'inline-block',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 8,
  paddingBottom: 8,
  color: 'white',
  backgroundColor: 'tomato',
  borderRadius: 4,
  ':hover': {
    backgroundColor: 'black'
  }
})

Button.defaultProps = {
  is: 'a',
  f: 2
}

export default Button
