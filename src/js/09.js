class Vue {
  #event
  
  get event() {
    return this.#event;
  }
  
  constructor() {
    this.#event = {}
  }
  
  $on(event, fn) {
    if (Array.isArray(event)) {
      event.forEach(item => this.$on(item, fn))
    } else {
      (this.#event[event] || (this.#event[event] = [])).push(fn)
    }
    return this
  }
  
  $once(event, fn) {
    const self = this
    const on = function () {
      self.$off(event, on)
      this.fn = fn
      fn.apply(this, arguments);
    }
    this.$on(event, on)
    return this
  }
  
  $off(event, fn) {
    if (!arguments.length) {
      this.#event = {}
      return this
    }
    if (Array.isArray(event)) {
      event.forEach(item => this.$off(item, fn))
      return this
    }
    
    const callbacks = this.#event[event]
    if (!callbacks) {
      return this
    }
    if (!fn) {
      this.#event[event] = null
      return this
    }
    
    let i = callbacks.length
    while (i--) {
      if (callbacks[i] === fn || callbacks[i] === fn.fn) {
        callbacks.splice(i, 1)
        break
      }
    }
    
    return this
    
  }
  
  $emit(event) {
    let callbacks = this.#event[event]
    if (callbacks) {
      const args = [].slice.call(arguments, 1)
      callbacks.forEach(cb => args ? cb.apply(this, args) : cb.call(this))
    }
  }
}

