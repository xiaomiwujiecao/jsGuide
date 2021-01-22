const arrayProto = Array.prototype;

export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [

  "push",

  "pop",

  "shift",

  "unshift",

  "splice",

  "sort",

  "reverse"

];


/**

 * Intercept mutating methods and emit events

 */

this.__ob__ = {};
let ob;
ob.dep = {};
methodsToPatch.forEach(function (method) {

  // cache original method

  const original = arrayProto[method];

  function def(arrayMethods, method, mutator) {

  }

  def(arrayMethods, method, function mutator(...args) {

    const result = original.apply(this, args);

    const ob = this.__ob__;

    let inserted;

    switch (method) {

      case "push":

      case "unshift":

        inserted = args;

        break;

      case "splice":

        inserted = args.slice(2);

        break;

    }

    if (inserted) ob.observeArray(inserted);

    // notify change

    ob.dep.notify();

    return result;

  });

});


/**

 * Observe a list of Array items.

 */

function observe(item) {

}

let Observer;
Observer.prototype.observeArray = function observeArray(items) {

  let i = 0, l = items.length;
  for (; i < l; i++) {

    observe(items[i]);

  }

};
