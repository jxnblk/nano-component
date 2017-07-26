import React from 'react'
import nano from 'nano-component'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'

const scope = {
  nano
}

const media = `@media screen and (min-width: 40em)`

const Provider = nano(LiveProvider)({
  position: 'relative',
  borderRadius: 4,
  boxShadow: `0 0 1px rgba(0, 0, 0, .5)`,
  [media]: {
    display: 'flex'
  }
})

const Preview = nano(LivePreview)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
  [media]: {
    width: '50%',
  }
})

const Editor = nano(LiveEditor)({
  fontFamily: `'Roboto Mono', 'SF Mono', Menlo, monospace`,
  fontSize: 16,
  overflow: 'auto',
  margin: 0,
  padding: 16,
  outline: 'none',
  tabSize: '2',
  backgroundColor: '#f9f6f6',
  [media]: {
    width: '50%',
  }
})

const Err = nano(LiveError)({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  fontSize: 12,
  padding: 16,
  color: 'white',
  backgroundColor: 'red'
})

const Live = props => (
  <Provider
    scope={scope}
    mountStylesheet={false}
    {...props}>
    <Preview />
    <Editor />
    <Err />
  </Provider>
)

export default Live
