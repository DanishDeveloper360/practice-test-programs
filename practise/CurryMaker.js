/**
 * @param {Function} fn Function to curry.
 * @param {Number} lenght The arguments required to invoke the function. Optional. By default is fn.length
 * @returns {Function} The currified function.
 */
function curry(fn, length) {
    length = length || fn.length;
    return function currified() {
        var args = [].slice.call(arguments);

        if (args.length === 0)
            return currified;

        if (args.length >= length)
            return fn.apply(this, args);

        var child = fn.bind.apply(fn, [this].concat(args));
        return curry(child, length - args.length);
    };
}




var log = console.log.bind(console);


// recursive currification
// curry(log, 5)(1)(2)(3)(4)(5); // 1 2 3 4 5


// // empty calls are ignored
// curry(log, 1)()()()()(1); // Logs: 1

// // extra args are passed
// curry(log, 1)(1, 2, 3, 4); // Logs: 1 2 3 4

// // recursive currification
// curry(log, 5)(1)(2)(3)(4)(5); // 1 2 3 4 5

// // works with all combination
// curry(log, 4)(1, 2, 3, 4); // Logs: 1 2 3 4
// curry(log, 4)(1, 2, 3)(4); // Logs: 1 2 3 4
// curry(log, 4)(1, 2)(3, 4); // Logs: 1 2 3 4
// curry(log, 4)(1)(2, 3, 4); // Logs: 1 2 3 4
// curry(log, 4)(1, 2)(3)(4); // Logs: 1 2 3 4
// curry(log, 4)(1)(2)(3, 4); // Logs: 1 2 3 4
// curry(log, 4)(1)(2, 3)(4); // Logs: 1 2 3 4
// curry(log, 4)(1)(2)(3)(4); // Logs: 1 2 3 4

// // function is not invoked until argument lenght is reached
// console.log(curry(log, 4)(1)(2)(3)); // returns function currified() { ... }

// // when argument length is reached function is invoked and its result is returned
// try {
//     curry(log, 4)(1)(2)(3)(4)(5); // logs 1 2 3 4 & throws undefined is not a function
// } catch (err) {
//     console.log(err);
// }

function sum(a, b) {
    return a + b;
}

// argument length detected automatically
console.log(curry(sum)(1)(2));