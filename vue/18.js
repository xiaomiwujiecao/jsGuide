class EventEmitter {
  subscribes = []
  
  subscribe(type = 'any', fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = []
    }
    this.subscribes[type].push(fn)
  }
  
  unsubscribe(type = 'any', fn) {
    this.subscribes[type] = this.subscribes[type].filter(((item) => item !== fn))
  }
  
  publish(type = 'any', ...args) {
    if (!this.subscribes[type]) return
    this.subscribes[type].forEach(fn => fn(...args))
  }
}

var Tom = {
  readNews: function (info) {
    console.log(info);
  }
};


const emitter = new EventEmitter()

emitter.subscribe('娱乐', Tom.readNews);
emitter.subscribe('体育', Tom.readNews);

//Tom 退订娱乐新闻：
emitter.unsubscribe('娱乐', Tom.readNews);

//发布新报纸：
emitter.publish('娱乐', 'S.H.E演唱会惊喜登台')
emitter.publish('体育', '欧国联-意大利0-1客负葡萄牙');


