import { createElement as h } from 'react'

let _id = 0
let insert = n => n
const cache = {}
const hyphenate = str => ('' + str).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const px = n => typeof n === 'number' ? n + 'px' : n
const mx = (rule, media) => media ? `${media}{${rule}}` : rule
const rx = (cn, prop, val, media) => mx(`.${cn}{${hyphenate(prop)}:${px(val)}}`, media)

if (typeof window !== 'undefined') {
  const sheet = document.head.appendChild(
    document.createElement('style')
  ).sheet
  insert = rule => {
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

const parse = (obj, child = '', media) => {
  if (!obj) return ''
  return Object.keys(obj).map(key => {
    const val = obj[key]
    if (val === null) return ''
    if (typeof val === 'object') {
      const m2 = /^@/.test(key) ? key : null
      const c2 = m2 ? child : child + key
      return parse(val, c2, m2)
    }
    const cacheKey = key + val + media
    if (cache[cacheKey]) {
      return cache[cacheKey]
    }
    const className = 'x' + (_id++).toString(36)
    const rule = rx(className + child, key, val, media)
    insert(rule)
    cache[cacheKey] = className
    return className
  }).join(' ')
}

const nano = Comp => (...args) => props => {
  const className = args
    .map(arg => typeof arg === 'function' ? arg(props) : arg)
    .map(s => parse(s)).join(' ')

  return h(Comp, Object.assign({}, props, {
    className: [ props.className, className ].join(' ')
  }))
}

export default nano
