### unexpected-jest-snapshot

This module extends the [unexpected](https://github.com/unexpectedjs/unexpected)
assertion library with integration with [jest](https://facebook.github.io/jest/)
snapshot testing.

[![NPM version](https://badge.fury.io/js/unexpected-jest-snapshot.svg)](http://badge.fury.io/js/unexpected-jest-snapshot)
[![Build Status](https://travis-ci.org/albertfdp/unexpected-jest-snapshot.svg?branch=master)](https://travis-ci.org/albertfdp/unexpected-jest-snapshot)
[![Dependency Status](https://david-dm.org/albertfdp/unexpected-jest-snapshot.svg)](https://david-dm.org/albertfdp/unexpected-jest-snapshot)

## How to use it

### Node

Install it with npm:

```
$ npm install unexpected jest unexpected-jest-snapshot
```

Then:

```javascript
const expect = require('unexpected').clone();
expect.use(require('unexpected-jest-snapshot'));
```