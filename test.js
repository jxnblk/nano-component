import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import nano from './src'

test.afterEach.always(() => {
  const sheet = document.head.querySelector('style').sheet
  while (sheet.cssRules.length) {
    sheet.deleteRule(0)
  }
})

test('exports a function', t => {
  t.is(typeof nano, 'function')
})

test('returns a function', t => {
  const a = nano('button')
  t.is(typeof a, 'function')
})

test('renders', t => {
  const Button = nano('button')()
  const json = render(<Button />).toJSON()
  t.is(json.type, 'button')
  t.snapshot(json)
})

test('injects a style tag', t => {
  const tag = document.head.querySelector('style')
  t.truthy(tag)
  t.true(tag instanceof HTMLStyleElement)
})

test('creates css rules', t => {
  const el = nano('div')({ color: 'tomato' })({})
  const tag = document.head.querySelector('style')
  const rules = [...tag.sheet.cssRules]
  t.true(rules.length > 0)
})

test('adds classnames', t => {
  const Button = nano('button')({
    color: 'white',
    backgroundColor: 'tomato'
  })
  const json = render(<Button />).toJSON()
  t.true(json.props.className.length > 0)
})

test('handles nested pseudoclass objects', t => {
  const Button = nano('button')({
    backgroundColor: 'tomato',
    ':hover': {
      backgroundColor: 'black'
    }
  })
  const json = render(<Button />).toJSON()
  t.snapshot(json)
})

test('handles nested @media objects', t => {
  const Button = nano('button')({
    backgroundColor: 'tomato',
    '@media screen and (min-width: 32em)': {
      backgroundColor: 'black'
    }
  })
  const json = render(<Button />).toJSON()
  t.snapshot(json)
})

test('handles deeply nested objects', t => {
  const Button = nano('button')({
    backgroundColor: 'tomato',
    '@media screen and (min-width: 32em)': {
      fontSize: 20,
      ':hover': {
        backgroundColor: 'black'
      }
    }
  })
  const json = render(<Button />).toJSON()
  t.snapshot(json)
})

test('handles function arguments', t => {
  const Button = nano('button')(props => ({
    backgroundColor: props.color
  }))
  const a = render(<Button />).toJSON()
  const b = render(<Button color='tomato' />).toJSON()
  const c = render(<Button color='black' />).toJSON()
  t.snapshot(a)
  t.snapshot(b)
  t.snapshot(c)
})

