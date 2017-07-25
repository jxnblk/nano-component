
# nano-component

Dynamic React component styling in under 1kb

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
nano-component attempts to strip the functionality down to an point where there's nothing left to remove.


## Features

- Under 1kb gzipped
- 52 LOC
- Simple API
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

const H2 = tag('h2')([
  'color'
])

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
