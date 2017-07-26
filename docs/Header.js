import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Pre,
  Container,
  Button,
  Chip
} from './ui'

const Header = props => (
  <Container
    color='black'
    bg='white'>
    <Chip mt={4} />
    <Heading mt={4} f={4}>
      nano-component
    </Heading>
    <Text mb={4} f={4}>
      Fast & simple React component styles in under
      <Box is='span' color='tomato'> 1kb</Box>
    </Text>
    <Flex align='center' mb={4}>
      <Button
        mr={2}
        href='https://github.com/jxnblk/nano-component'
        children='GitHub'
      />
      <Pre color='tomato'>npm i nano-component</Pre>
    </Flex>
  </Container>
)

export default Header
