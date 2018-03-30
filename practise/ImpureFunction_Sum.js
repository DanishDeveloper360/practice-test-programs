function sum() {
    var val = 0;
    return function () {
        return val++;
    };
}

var mSum = sum();

console.log(mSum());
console.log(mSum());
console.log(mSum());
console.log(mSum());