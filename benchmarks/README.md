
# Benchmarks

First, in the root of the nano-component repo, run `npm run prepublish`.

Then:

```sh
cd benchmarks
npm i
npm test
```

    nano-component x 3,855 ops/sec ±4.45% (72 runs sampled)
    emotion x 1,883 ops/sec ±4.54% (72 runs sampled)
    glamorous x 1,827 ops/sec ±5.31% (73 runs sampled)
    styled-components x 1,556 ops/sec ±4.34% (67 runs sampled)

    nano-component x 3,310 ops/sec ±5.33% (74 runs sampled)
    emotion x 1,979 ops/sec ±4.65% (74 runs sampled)
    glamorous x 1,891 ops/sec ±4.98% (72 runs sampled)
    styled-components x 1,551 ops/sec ±4.27% (72 runs sampled)

    nano-component x 3,228 ops/sec ±6.15% (70 runs sampled)
    emotion x 2,371 ops/sec ±3.24% (76 runs sampled)
    glamorous x 2,300 ops/sec ±4.35% (72 runs sampled)
    styled-components x 1,557 ops/sec ±3.91% (75 runs sampled)

