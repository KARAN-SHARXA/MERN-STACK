// data types in js
//type of data
// number, string, boolean, null, undefined, object, symbol, bigint



// primitives -> number, string, boolean, null, undefined, symbol, bigint

// non-primitives -> object, array, function

let a = "karan sharma"
console.log(a);

let b = 24;
console.log(b);


let c = null;
console.log(c);

let d;
console.log(d);


//Symbol -> unique immutable value

let u1 = Symbol("uid");
console.log(u1);

let u2 = Symbol("uid");



let aa = [1,2,3];
let bb = aa;
bb.pop();
console.log(bb);

// in js there is dynamin typing
let aaa = 12;
aaa= true;

// type coercion 

console.log("5"+1);


// importent question defference between null and undefined
let n = null; // null is an assigned value , it means nothing
let m; // undefined means a variable has been declared but not assigned a value

console.log(n);
console.log(m);




// ✅ Definition: Immutable Data Type

// Immutable data types are those whose values cannot be changed once they are created.
// Any operation that appears to modify an immutable value actually creates a new value in memory instead of changing the original one.

// Examples: number, string, boolean, null, undefined, symbol, bigint

// ✅ Definition: Mutable Data Type

// Mutable data types are those whose values can be changed after they are created.
// Changes made to a mutable value directly affect the original object stored in memory.

// Examples: object, array, function

