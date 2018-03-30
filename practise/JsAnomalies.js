1. Closure Anomaly

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// output: 3
// output: 3
// output: 3

2. Context Anomaly

var message = {
  content: 'Hello world!',
  send: function () {
    console.log(this.content)
  }
};

setTimeout(message.send);

// output: undefined

3. Delete Anomaly

var x = 1;
var output = (function(){
  delete x;
  return x;
})();

console.log(output);
// output: 1

4. Type Anomaly

console.log(typeof null);
// output: object


console.log(null instanceof Object);
// output: false

console.log(typeof NaN);
// output: number

console.log(typeof function () {});
// output: function
// but there's no function type http://ecma-international.org/ecma-262/5.1/#sec-8

5. Variable hoisting Anomaly

var a = 1; 
function bar() { 
    if (!a) { 
        var a = 10; 
    } 
    console.log(a); 
} 
bar();
// output: 10

--- one more example below :

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
} 
b(); 
console.log(a);
// output: 1

--- More example ...
(function(){
  var a = b = 3;
})();

console.log(typeof a);
// output: undefined

console.log(typeof b);
// output: number

6. Compare Anomaly

console.log('' == '0');
// output: false

console.log(0 == '');
// output: true

console.log(null == undefined);
// output: true