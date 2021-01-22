"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
function isValidArrayIndex(key) {
    return false;
}
function defineReactive(value, key, val) {
}
function set(target, key, val) {
    // target is an array.
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        // Modify the length of the array to avoid splice() execution error caused by index > array length.
        target.length = Math.max(target.length, key);
        // Use array splice mutation method to trigger response.
        target.splice(key, 1, val);
        return val;
    }
    // The target is an object, and the key is on target or `target.prototype` and must not be on `Object.prototype`,
    // directly assigned.
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    // None of the above is true, that is, start to create a new attribute for the target.
    // get Observer instance.
    var ob = { dep: undefined, value: undefined };
    // target itself is not responsive data, directly assigned.
    if (!ob) {
        target[key] = val;
        return val;
    }
    // Responsive processing.
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
}
exports.set = set;
//# sourceMappingURL=12.js.map