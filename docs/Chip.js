import nano from 'nano-component'
import Box from './Box'

const Chip = nano(Box)({
  width: 32,
  height: 8,
  backgroundColor: 'tomato'
})

export default Chip
