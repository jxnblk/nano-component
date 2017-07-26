import React from 'react'
import nano from 'nano-component'

const Link = nano('a')({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
})

const Img = nano('img')({
  display: 'block',
  margin: 0
})

const Badge = ({
  href,
  image
}) => (
  <Link href={href}>
    <Img src={image} />
  </Link>
)

export default Badge
