
// start with at string
var s = "my string";

//change its value (remember this changing of value is by value not reference)
s.toUpperCase();

// assign it to t
var t = s;

//t is now "my string"

//this is because, when we changed the value of s to be uppercase, we were actually only referring to s's value not the
// location in which it is stored. Therefore the next time it is fetched, it is the same as the originally stored value


//objects on the other hand are reference types so when we mutate them, we are mutating the value that is stored in memory
//so the next time it is use, it will pull the value from memory with the mutations included

//create and mutate
var obj = { z : 1 };
obj.y = 2;
obj.x = 3;

// obj, in memory, now stores all three properties

// a weird thing to come across is that because this is by reference, when you assign it to a new object like:
var otherObj = obj;

//otherObj is now pointing at the same location that obj is
//so changing any properties in otherObj will change them in obj, and vice versa

otherObj.a = 4;

//obj will also have a property named a with the value of 4

//if you don't want this you must create a new object and explicitly copy over the properties
var finalObj = {};

//- foreach property in obj
for(prop in obj){
  //add it to the new object
  finalObj[prop] = obj[prop];
}



var duck = Object.assign(Object.create(animal), {
    speak : function () { 
        console.log("quack");
        return this;
    }
});




