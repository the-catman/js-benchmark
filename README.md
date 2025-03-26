# js-benchmark

A simple repository for benchmarking similar but different solutions to problems in JavaScript.

## Note

Sometimes, for more intricate tasks, it's not enough to just simply use one solution. That's why it's important to benchmark your code and run profilers if performance matters, since not everything can be easily optimized.

## Why?

In short, not all JavaScript solutions are born equal. Some are way cleaner at the cost of performance, and vice versa.

If you need performance, this is definitely the right place to be.

Otherwise, for simple tasks, you can use whichever solution you wish.

## Suggestions, pull requests, and future tasks

Suggestions and pull requests are welcome.

I will, without a doubt, update the repository to include more common performance issues that can be easily fixed.

## Summary

These conclusions were drawn on the V8 engine, the JavaScript engine used by NodeJS and Chrome. Results may differ on other browsers/engines, ***RUN THE TESTS FOR YOURSELF TO SEE!***

--

When iterating over an array, use `for(let i = 0; i < arr.length; i++)` or `let i = 0; while(i < arr.length) { i++; }`.

When iterating over an object, use `for(let key of Object.keys(object))`.