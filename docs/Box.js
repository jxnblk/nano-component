import nano from 'nano-component'
import tag from 'tag-hoc'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'
import { withTheme } from 'theming'

const Div = tag([
  'width',
  'w',
  'fontSize',
  'f',
  'color',
  'bg',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
])('div')

const Box = withTheme(nano(Div)(
  space,
  width,
  fontSize,
  color
))

export default Box
