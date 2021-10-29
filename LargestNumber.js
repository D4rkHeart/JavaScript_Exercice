function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour([[7, 1, 5, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
