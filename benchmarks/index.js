const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

require('browser-env')()
const nano = require('./lib/nano')
const styledComponents = require('./lib/styled-components')
const glamorous = require('./lib/glamorous')
const emotion = require('./lib/emotion')

suite
  .add('nano-component', () => {
    nano()
  })
  .add('styled-components', () => {
    styledComponents()
  })
  .add('glamorous', () => {
    glamorous()
  })
  .add('emotion', () => {
    glamorous()
  })
  .on('cycle', e => {
    console.log(String(e.target))
  })
  .on('complete', function () {
    const top = this.filter('fastest').map('name')
    console.log(`Fastest is ${top}`)
  })
  .run({
    async: true
  })

