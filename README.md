# env-inject-file [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Node command line utility that processes input file with environment placeholders to output file with populated environment variables

## Installation

```sh
$ npm install env-inject-file -g
```

## Usage

Replace all environment placeholders in 'foo.yaml' to output 'bar.yaml'. Env variable is e.g.`${SOME_ENV}`.
```bash
node env-inject-file --in foo.yml --out bar.yml
```
## Programmatic Usage

Use env-inject-file from JS program:
```javascript
var envInjectFile = require('../env-inject-file');

envInjectFile({
  in: "/fullyqualifiedpath/file.yml",
  out: "/fullyqualifiedpath/out.yml",
});

```

## License

MIT © [Eisberg Labs](http://eisberg-labs.com)


[npm-image]: https://badge.fury.io/js/env-inject-file.svg
[npm-url]: https://npmjs.org/package/env-inject-file
[travis-image]: https://travis-ci.org/eisberg-labs/env-inject-file.svg?branch=master
[travis-url]: https://travis-ci.org/eisberg-labs/env-inject-file
[daviddm-image]: https://david-dm.org/eisberg-labs/env-inject-file.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/eisberg-labs/env-inject-file
