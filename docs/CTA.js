import React from 'react'
import {
  Text,
  Button,
} from './ui'
import Section from './Section'

const CTA = () => (
  <Section name='Get Started'>
    <Text mb={4}>
      Learn more about using nano-component on GitHub
    </Text>
    <Button
      href='https://github.com/jxnblk/nano-component'
      children='GitHub'
    />
  </Section>
)

export default CTA
