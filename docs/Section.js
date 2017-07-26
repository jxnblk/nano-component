import React from 'react'
import {
  Container,
  Heading,
  BlockLink,
  Chip
} from './ui'

const Section = props => (
  <section id={props.name}>
    <Container py={4}>
      <Chip mb={4} />
      <Heading caps mb={2}>
        <BlockLink
          href={'#' + props.name}>
          {props.name}
        </BlockLink>
      </Heading>
      {props.children}
    </Container>
  </section>
)

export default Section
