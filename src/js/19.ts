const arr = [1, 2, 3, [4, 5], 6, 7, 8, 9]

const flatArr = Array.from(new Set(arr.flat(Infinity))).sort((a: number, b: number) => {
    return a - b
})

console.log(flatArr)
