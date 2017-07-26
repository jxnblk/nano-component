
# nano-component

Fast & simple React component styles in under 1kb

http://jxnblk.com/nano-component/

[![Build Status](https://travis-ci.org/jxnblk/nano-component.svg?branch=master)](https://travis-ci.org/jxnblk/nano-component)
[![0.9kb gzip](https://img.shields.io/badge/gzip-0.9kb-brightgreen.svg)](https://github.com/siddharthkp/bundlesize)


```sh
npm i nano-component
```

```js
import nano from 'nano-component'

const Button = nano('button')({
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
```


## About

Inspired by libraries like [styled-components][6], [glamorous][7], and [emotion][8],
nano-component is a bare-bones css-in-js library for easily creating styled React UI components.

### Motivation

> Perfection is attained not when there is nothing more to add, but when there is nothing more to remove.
> - Antoine de Saint Exupéry

Encapsulating styles in UI components is a great way to build consistent, scalable UI,
and using JavaScript to manage these styles makes a lot of sense for large applications with dozens of contributors.
While native JavaScript provides some great low-level APIs for managing styles,
libraries that interact with these APIs tend to add a lot of features that
add complexity and a performance penalty for what should be a fairly straightforward task.

Nano components comes from a desire to show that dynamically injecting CSS with JavaScript is not that complicated.
In 52 lines of code, this library provides dynamically rendered, encapsulated styles that can be computed from component props.

## Features

- Under 1kb gzipped
- 52 LOC
- Fast
- Simple API
- Extensible
- Use JavaScript objects for styling
- Pseudoclasses
- Media queries
- Child selectors
- Atomic code deduplication


## Dynamic Styles

To dynamically adjust styles based on props, pass a function to nano-component.

```js
const Heading = nano('h2')(props => ({
  color: props.color
}))

// <Heading color='tomato'>Hello</Heading>
```

## Multiple Styles

Mutliple arguments can be passed to nano components to help break up logic.

```js
const color = props => ({ color: props: color })
const margin = props => ({ margin: props.margin })

const Heading = nano('h2')(
  color,
  margin
)
```

### styled-system

The [styled-system][0] library can be used with nano-component

```js
import nano from 'nano-component'
import {
  space,
  width
} from 'styled-system'

const Box = nano('div')(space, width)
```


## Removing Props

To remove unwanted style props from the root HTML element, use a higher order component like
[tag-hoc][2] or [recompose's][3] [mapProps][4] utility.

```js
import nano from 'nano-component'
import tag from 'tag-hoc'

const H2 = tag([
  'color'
])('h2')

const Heading = nano(H2)(props => ({
  color: props.color
}))
```

```js
import nano from 'nano-component'
import { mapProps } from 'recompose'

const H2 = mapProps(props => Object.assign({}, props, {
  color: null
}))('h2')

const Heading = nano(H2)(props => ({
  color: props.color
}))
```


## Theming

The [theming][5] library can be used to add styled-components-like theming to a nano component.

```js
import { withTheme } from 'theming'

const Heading = nano('h2')(props => ({
  fontSize: props.theme.fontSizes[4]
}))

export default withTheme(Heading)
```

```js
import React from 'react'
import { ThemeProvider } from 'theming'
import theme from './theme'
import Heading from './Heading'

const App = props => (
  <ThemeProvider theme={theme}>
    <Heading>
      Hello
    </Heading>
  </ThemeProvider>
)
```

## Benchmarks

nano-component does not have as many features as other similar libraries,
but when run against similar benchmarks, nano-component tends to perform slightly better.
See the [benchmarks](benchmarks/) directory for more.

    nano-component x 3,855 ops/sec ±4.45% (72 runs sampled)
    emotion x 1,883 ops/sec ±4.54% (72 runs sampled)
    glamorous x 1,827 ops/sec ±5.31% (73 runs sampled)
    styled-components x 1,556 ops/sec ±4.34% (67 runs sampled)

    nano-component x 3,310 ops/sec ±5.33% (74 runs sampled)
    emotion x 1,979 ops/sec ±4.65% (74 runs sampled)
    glamorous x 1,891 ops/sec ±4.98% (72 runs sampled)
    styled-components x 1,551 ops/sec ±4.27% (72 runs sampled)

    nano-component x 3,228 ops/sec ±6.15% (70 runs sampled)
    emotion x 2,371 ops/sec ±3.24% (76 runs sampled)
    glamorous x 2,300 ops/sec ±4.35% (72 runs sampled)
    styled-components x 1,557 ops/sec ±3.91% (75 runs sampled)


## Static/Server Rendering

While nano components will render in Node.js environments, the styles are only created in client-side environments.
This means that nano components can be used for universal rendering, but will not receive styles until rendered with client-side JavaScript.


## Related

- [styled-components][6]
- [glamorous][7]
- [emotion][8]
- [cxs](https://github.com/jxnblk/cxs)


[0]: https://github.com/jxnblk/styled-system
[1]: https://polished.js.org
[2]: https://github.com/jxnblk/tag-hoc
[3]: https://github.com/acdlite/recompose
[4]: https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops
[5]: https://github.com/iamstarkov/theming
[6]: https://github.com/styled-components/styled-components
[7]: https://github.com/paypal/glamorous
[8]: https://github.com/tkh44/emotion

MIT License
