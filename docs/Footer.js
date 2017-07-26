import React from 'react'
import {
  Container,
  Flex,
  Box,
  Link
} from './ui'

const Footer = props => (
  <footer>
    <Container>
      <Flex>
        <Link
          f={0}
          mr={2}
          href='https://github.com/jxnblk/nano-component'
          children='GitHub'
        />
        <Link
          f={0}
          href='http://jxnblk.com'
          children='Made by Jxnblk'
        />
        <Box f={0} ml='auto'>(^..^ )_</Box>
      </Flex>
    </Container>
  </footer>
)

export default Footer
