# Pluck a field from an object stream

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[npm-image]: https://img.shields.io/npm/v/pluck-stream2.svg
[npm-url]: https://npmjs.org/package/pluck-stream2
[downloads-image]: https://img.shields.io/npm/dm/pluck-stream2.svg
[downloads-url]: https://npmjs.org/package/pluck-stream2

## Install

```
$ npm install --save pluck-stream2
```

## Usage

```javascript
var pluckStream = require('pluck-stream2');

/*
Input: {foo: 'bar'}
Output: 'bar'
*/
createAReadStream().pipe(pluckStream('foo'));
```
