import React from 'react'
import Live from './Live'
import {
  Box,
  Container,
  Heading,
  Text,
  Pre,
} from './ui'
import Section from './Section'

const GettingStarted = props => (
  <Section name='Getting Started'>
    <Text mb={3}>
      Install nano-component and import it to create styled React UI components.
    </Text>
    <Pre mb={3} color='tomato'>npm install --save nano-component</Pre>
    <Pre mb={3} color='tomato'>import nano from 'nano-component'</Pre>
    <Live
      noInline
      code={code}
    />
  </Section>
)

const code = `const Heading = nano('h2')({
  fontSize: 48,
  margin: 0,
  color: 'tomato'
})

render(<Heading>Hello</Heading>)`

export default GettingStarted
