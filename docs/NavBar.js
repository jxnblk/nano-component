import React from 'react'
import {
  Flex,
  Box
} from './ui'
import Badge from './Badge'
import Tweet from './Tweet'

const NavBar = props => (
  <nav>
    <Flex
      wrap
      p={2}
      align='center'>
      <Box ml='auto' />
      <Badge
        href='https://travis-ci.org/jxnblk/nano-component'
        image='https://img.shields.io/travis/jxnblk/nano-component/master.svg'
      />
      <Box ml={1} />
      <Badge
        href='https://github.com/siddharthkp/bundlesize'
        image='https://img.shields.io/badge/gzip-0.9kb-brightgreen.svg'
      />
      <Box ml={1} />
      <Tweet />
      <Box ml={1} />
      <Badge
        href='https://github.com/jxnblk/nano-component'
        image='https://img.shields.io/github/stars/jxnblk/nano-component.svg?style=social&label=Star'
      />
    </Flex>
  </nav>
)

export default NavBar
