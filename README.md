# @ya-wxapp-org/bus

[![NPM version](https://img.shields.io/npm/v/@ya-wxapp-org/bus.svg?style=flat)](https://npmjs.com/package/@ya-wxapp-org/bus) [![NPM downloads](https://img.shields.io/npm/dm/@ya-wxapp-org/bus.svg?style=flat)](https://npmjs.com/package/@ya-wxapp-org/bus)

## Install

```bash
yarn add @ya-wxapp-org/bus
```

## Usage

```js
import bus from '@ya-wxapp-org/bus'

// methods
bus.on('eventName', (val) => { /* callback */ })
bus.emit('eventName', val) // emit Event

bus.push('key', something) // like array.push
bus.pop('key') // get something
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@ya-wxapp-org/bus** © [fimars](https://github.com/fimars), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by fimars with help from contributors ([list](https://github.com/fimars/@ya-wxapp-org/bus/contributors)).

> [github.com/fimars](https://github.com/fimars) · GitHub [@fimars](https://github.com/fimars) · Twitter [@fimars](https://twitter.com/fimars)
