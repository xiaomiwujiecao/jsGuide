const playground = []
playground['aaa'] = [function () {
  return 1
},function () {
  return 2
}]


const eventListener  =  playground['aaa']

console.log(playground)
console.log(eventListener)


function f() {
  return [].slice.call(arguments,1)
}

console.log(f(1,2,32,32,32))

const o = [123213213,213,21312,23,213,23,12]
const o1 = {a:o,b:2,c:3}
function f1() {
  return [].reverse.apply(o,o)
}

console.log(f1())
