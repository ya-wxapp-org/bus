/**
 * 一个迷你的EventEmit类，功能就四个`on`,`emit`,`push`,`pop`
 *
 * @updateTime: 2017-12-25 🎄
 * @author ChenZerong
 */

export default class Bus {
  constructor () {
    this.listener = {}
    this.store = {}
    this._getListenerQueue = this._getQueue('listener')
    this._getStoreQueue = this._getQueue('store')
  }

  on (evtname, fn) {
    const queue = this._getListenerQueue(evtname)
    queue.push(fn)
  }
  emit (evtname, ...params) {
    this._getListenerQueue(evtname).forEach(fn => {
      fn.apply(null, params)
    })
  }

  push (key, commit) {
    this._getStoreQueue(key).push(commit)
  }
  pop (key) {
    return this._getStoreQueue(key).pop()
  }

  _getQueue (queueName) {
    return function (key) {
      if (typeof key !== 'string') {
        throw new Error('[lib/bus] evtname must be string.')
      }
      if (!this[queueName][key]) this[queueName][key] = []
      return this[queueName][key]
    }
  }
}
