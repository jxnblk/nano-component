import { createElement as h } from 'react'

let _id = 0
let insert = n => n
const cache = {}
const hyphenate = str => ('' + str).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const px = n => typeof n === 'number' ? n + 'px' : n
const mx = (rule, media) => media ? `${media}{${rule}}` : rule
const rx = (cn, prop, val, media) => mx(`.${cn}{${hyphenate(prop)}:${px(val)}}`, media)

if (typeof window !== 'undefined') {
  const tag = document.createElement('style')
  document.head.appendChild(tag)
  const sheet = tag.sheet
  insert = rule => {
    const i = sheet.cssRules.length
    sheet.insertRule(rule, i)
  }
}

const parse = (obj, child = '', media) => {
  const classnames = []
  for (let key in obj) {
    const val = obj[key]
    if (val !== null && typeof val === 'object') {
      const m2 = /^@/.test(key) ? key : null
      const c2 = m2 ? child : child + key
      classnames.push(parse(val, c2, m2))
      continue
    }
    const cacheKey = key + val + media
    if (cache[cacheKey]) {
      classnames.push(cache[cacheKey])
      continue
    }
    const cn = 'x' + (_id++).toString(36)
    const rule = rx(cn + child, key, val, media)
    insert(rule)
    cache[cacheKey] = cn
    classnames.push(cn)
  }
  return classnames.join(' ')
}

const comp = Comp => (...args) => props => {
  const styles = args.map(arg => typeof arg === 'function' ? arg(props) : arg)
  const className = styles.map(s => parse(s)).join(' ')
  return h(Comp, Object.assign({}, props, { className }))
}

export default comp
