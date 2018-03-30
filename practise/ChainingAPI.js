var Calc = function (start) {
    this.add = function (x) {
        start = start + x; 
        return this;
    }

    this.mul = function (x) {
        start = start * x;
        return this;
    }

    this.equals = function (callback) {
        callback(start);
        return this;
    }
};

new Calc(0).add(1).add(3).mul(4).equals(function (result) {
    console.log(result);
})
