const h = require('react').createElement

let _id = 0
let insert = () => {}
const cache = {}
const hyphenate = s => s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const px = n => typeof n === 'number' ? n + 'px' : n
const mx = (rule, media) => media ? `${media}{${rule}}` : rule
const rx = (cn, prop, val) => `.${cn}{${hyphenate(prop)}:${px(val)}}`

if (typeof window !== 'undefined') {
  const sheet = document.head.appendChild(
    document.createElement('style')
  ).sheet
  insert = rule => {
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

const parse = (obj, child, media) =>
  Object.keys(obj).map(key => {
    const val = obj[key]
    if (val === null) return ''
    if (typeof val === 'object') {
      const m2 = /^@/.test(key) ? key : null
      const c2 = m2 ? child : child + key
      return parse(val, c2, m2)
    }
    const cacheKey = key + val + media
    if (cache[cacheKey]) return cache[cacheKey]
    const className = 'x' + (_id++).toString(36)
    insert(mx(rx(className + child, key, val) , media))
    cache[cacheKey] = className
    return className
  }).join(' ')

const nano = C => (...args) => props =>
  h(C, Object.assign({}, props, {
    className: [
      props.className,
      args
        .map(a => typeof a === 'function' ? a(props) : a)
        .map(s => parse(s || {}, '')).join(' ')
    ].join(' ')
  }))

module.exports = nano
