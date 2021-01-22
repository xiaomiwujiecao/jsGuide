function _new(fn: Function, number: number, number1: number, number2: number, number3: number, number4: number, number5: number, number6: number, number7: number) {
    const newObj = Object.create(fn.prototype)
    console.log(this.arguments)
    // @ts-ignore
    const res = fn.apply(newObj, [...arguments].slice(1))
    return typeof res === 'object' ? res : newObj
}

const newOne = _new(Array,1,2,3,4,5,6,7,8)
console.log(newOne)
