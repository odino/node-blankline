# node-blankline

[![Build Status](https://travis-ci.org/odino/node-blankline.svg?branch=master)](https://travis-ci.org/odino/node-blankline)

> Because blanklines matter.

If you wrote code without `node-blankline`, now you will
really feel different.

## Installation

Simply install it via NPM:

```
npm install node-blankline
```

## Usage

Simple as hell, through `node-blankline` you will
simply get as many `console.log()` as you specify:

``` javascript
var blankline = require('node-blankline')

blankline(3)

// equivalent to
console.log();
console.log();
console.log();
```

If you dont pass any argument, you'd still get one log
(*you fancy!*):

``` javascript
blankline(); // console.log()
```

## Tests

Are run on travis, but you can also run them locally,
after cloning the repo and running an `npm install`:

```
npm test
```
