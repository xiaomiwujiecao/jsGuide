var arr = [1, 2, 3, [4, 5], 6, 7, 8, 9];
var flatArr = Array.from(new Set(arr.flat(Infinity))).sort(function (a, b) {
    return a - b;
});
console.log(flatArr);
//# sourceMappingURL=19.js.map