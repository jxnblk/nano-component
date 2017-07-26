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
  <Section name='Functional Styles'>
    <Text mb={3}>
      Pass a function to nano-component to dynamically change styles based on props.
    </Text>
    <Live
      noInline
      code={code}
    />
  </Section>
)

const code = `const Heading = nano('h2')(props => ({
  fontSize: props.big ? 48 : 32,
  margin: 0,
  color: props.color
}))

render(<Heading color='tomato'>Hello</Heading>)`

export default GettingStarted
