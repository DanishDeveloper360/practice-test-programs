let sum = x => {
    return add = y => {
        if (y !== undefined) {
            x = x + y;
            return add;
        } else
            return x;
    }
};

console.log(sum(3)(5)(6)());

