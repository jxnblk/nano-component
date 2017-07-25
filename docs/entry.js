import React from 'react'
import { render } from 'react-dom'
import { space, fontSize, color } from 'styled-system'
import comp from 'comp'

const Box = comp('div')(space, fontSize, color)

const Heading = comp('h1')(props => ({
  display: 'inline-block',
  width: '50%',
  color: props.color,
  backgroundColor: 'cyan',
  fontSize: 48,
  margin: 0,
  marginLeft: 24,
  marginBottom: 48,
  padding: 4,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 48,
  lineHeight: '1.25',
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  fontWeight: '600',
  outline: '1px solid cyan',
  transitionProperty: 'color',
  transitionDuration: '.2s',
  transtionTimingFunction: 'ease-out',
  transform: 'scale(1)',
  animationName: 'nope',
  animationDuration: '2s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  ':hover': {
    color: 'black',
    textDecoration: 'underline'
  }
}))

const Boop = comp('h2')(props => ({
  fontSize: 24,
  color: props.color,
  ':hover': {
    textDecoration: 'underline',
    color: 'blue'
  },
  '@media screen and (min-width: 40em)': {
    fontSize: 48
  },
  '@media screen and (min-width: 64em)': {
    fontSize: 64
  }
}))

const App = () => (
  <div>
    <Heading color='lime'>
      hello
    </Heading>
    <Heading color='tomato'>
      hello
    </Heading>
    <Heading color='lime'>
      hello
    </Heading>
    <Box f={5} p={4} bg='#eee'>
      <Boop color='tomato'>
        Boop
      </Boop>
    </Box>
  </div>
)

render(<App />, app)
