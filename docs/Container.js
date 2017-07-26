import nano from 'nano-component'
import Box from './Box'

const Container = nano(Box)({
  maxWidth: 1280,
})

Container.defaultProps = {
  p: [ 2, 3, 4 ],
  mx: 'auto'
}

export default Container
