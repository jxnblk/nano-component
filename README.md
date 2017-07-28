
# nano-component

Fast & simple React component styles in under 1kb

http://jxnblk.com/nano-component/

[![Build Status](https://travis-ci.org/jxnblk/nano-component.svg?branch=master&style=flat-square)](https://travis-ci.org/jxnblk/nano-component)
[![0.8kb gzip](https://img.shields.io/badge/gzip-0.8kb-brightgreen.svg?style=flat-square)](https://github.com/siddharthkp/bundlesize)


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

*– Antoine de Saint Exupéry*

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
- No build steps or configuration required


## Dynamic Styles

To dynamically adjust styles based on props, pass a function to nano-component.

```js
const Heading = nano('h2')(props => ({
  color: props.color
}))

// <Heading color='tomato'>Hello</Heading>
```


## Multiple Styles

Multiple arguments can be passed to nano components to help break up logic.

```js
const color = props => ({ color: props: color })
const margin = props => ({ margin: props.margin })

const Heading = nano('h2')(
  color,
  margin
)
```


## Number Values

Any number value will be converted to a pixel value, regardless of which CSS property it's applied to.
Unlike other libraries that use a blacklist of CSS properties,
nano component does not handle number values differently based on property.
This is to both keep the library size to a minimum and to ensure a more deliberate API.
To avoid adding pixels to unitless numbers, provide those values as strings.

```js
const Heading = nano('h2')({
  marginTop: 32,    // converted to pixels
  marginBottom: 8,
  lineHeight: '1.5' // a unitless value
```


## Extending Components

Other React components can be passed to nano-component to add styles,
as long as that component that accepts `className` as a prop –
for example, [react-router's][9] Link component.

```js
import { Link } from 'react-router'
import nano from 'nano-component'

const NavLink = nano(Link)({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'inherit'
})
```


## styled-system

The [styled-system][0] library can be used with nano-component

```js
import nano from 'nano-component'
import {
  space,
  width
} from 'styled-system'

const Box = nano('div')(space, width)
```


## Setting Props

To add props to a component, use the same [`.defaultProps`](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values)
object you would use on any other React component.

```js
const Heading = nano('h2')(props => ({
  fontSize: 32,
  color: props.color
}))

Heading.defaultProps = {
  color: 'tomato'
}
```


## Removing Props

To remove unwanted style props from the root HTML element, use a higher order component like
[tag-hoc][2] or [recompose's][3] [mapProps][4] utility.
This avoids any use of whitelisting or assumptions about which props should be passed to the underlying component.

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


## Sharing Styles

Importing shared, thematic constants can help manage UI styles in a more explicit way than anything possible with CSS.

```js
import nano from 'nano-component'
import { colors } from './theme'

const Heading = nano('h2')({
  color: colors.slate
})
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
    glamorous x 1,827 ops/sec ±5.31% (73 runs sampled)
    styled-components x 1,556 ops/sec ±4.34% (67 runs sampled)

    nano-component x 3,310 ops/sec ±5.33% (74 runs sampled)
    glamorous x 1,891 ops/sec ±4.98% (72 runs sampled)
    styled-components x 1,551 ops/sec ±4.27% (72 runs sampled)

    nano-component x 3,228 ops/sec ±6.15% (70 runs sampled)
    glamorous x 2,300 ops/sec ±4.35% (72 runs sampled)
    styled-components x 1,557 ops/sec ±3.91% (75 runs sampled)

library | gzip size
---|---
nano-component | 0.93 kB
emotion | 2.42 kB
glamorous | 7.95 kB
styled-components | 13.8 kB



## Limitations

### Static/Server Rendering

While nano components will render in Node.js environments, the styles are only created in client-side environments.
This means that nano components can be used for universal rendering, but will not receive styles until rendered with client-side JavaScript.
Generally this is an acceptable tradeoff for SEO purposes.

### Keyframes & Animations

While nano-component does not provide a mechanism for defining keyframes, predefined animations can be used in nano components.

```css
/* CSS file */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```js
import Ring from './Ring'

const Loading = nano(Ring)({
  animationName: 'spin',
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
})
```



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
[9]: https://github.com/ReactTraining/react-router

MIT License
