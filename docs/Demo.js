import React from 'react'
import Live from './Live'
import {
  Box,
  Container,
  Heading,
  Text,
  Pre,
} from './ui'

const Demo = props => (
  <section>
    <Container>
      <Live
        noInline
        code={code}
      />
    </Container>
  </section>
)

const code = `const Button = nano('button')({
  fontFamily: 'inherit',
  fontSize: 14,
  display: 'inline-block',
  margin: 0,
  padding: 16,
  border: 0,
  borderRadius: 4,
  color: 'white',
  backgroundColor: 'tomato',
  appearance: 'none',
  ':hover': {
    backgroundColor: 'black'
  },
  '@media screen and (min-width: 32em)': {
    fontSize: 16,
  }
})

render(<Button>Hello</Button>)`

export default Demo
