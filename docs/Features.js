import React from 'react'
import Section from './Section'
import {
  Text
} from './ui'

const Features = () => (
  <Section name='Features'>
    {features.map(feat => (
      <Text key={feat}>
        {feat}
      </Text>
    ))}
  </Section>
)

const features = [
  '- Under 1kb gzipped',
  '- 52 lines of code',
  '- Fast',
  '- Simple API',
  '- Use JavaScript objects for styling',
  '- Pseudoclasses',
  '- Media queries',
  '- Atomic code deduplication',
]

export default Features
