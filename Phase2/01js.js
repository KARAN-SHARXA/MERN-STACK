//***************************************************Chapter 1 ** let,const,var*****************************************//


//function scodped,agani declare
var a;// declare
var a = 12; // declare and intialize
var a =16;
console.log(a);




//cannot be declare again
let b ;
b=13;
console.log(b);


//cannot be change value again
const c = 17
console.log(c);



// Scope (global,block,functional)


var d = 12; // var is functionla scope


{
  let e = 77; // let is block sope
}



//reassignment , redeclaration


var a = 12; //ressignmnet
a = 32;



var a = 223 // redeclaration



let jj = 55;
jj=32; // ressignment is allowed


// let jj = 433; // not redeclaration





// Temporaral Dead zone

console.log(cc);


let cc = 12;


// var is a function scoped , Redeclaration and Reassignment is allowed
// let is a block scoped , Reassignment is allowed but Redeclaration is not allowed
// const is a block scoped , Reassignment and Redeclaration is not allowed



// Hoisting = It is a javascript behavior where variable and function declaration are processed before the code is executed
// What is Hoisting?


// JavaScript runs code in two phases:

// 1️⃣ Memory Creation Phase

// Memory is allocated for variables and functions

// Declarations are “hoisted” to the top of their scope

// 2️⃣ Execution Phase

// Code runs line by line

// Values are assigned to variables


// 🔹 Hoisting with var
// console.log(a); // undefined
// var a = 10;

// Why no error?

// Because during memory creation:

// var a; // hoisted


// So a exists and has the value undefined.

// ✔️ var is hoisted and initialized with undefined.




// Hoisting with let and const
// console.log(b); // ReferenceError
// let b = 20;

// console.log(c); // ReferenceError
// const c = 30;


// ⚠️ Important point:
// let and const are also hoisted, but not initialized.

// This leads to the concept of TDZ.







// Hoisting is a JavaScript behavior where variable declarations are moved to the top of their scope during the memory creation phase.

// For var, the variable is initialized with undefined.

// For let and const, the variables are hoisted but kept in the Temporal Dead Zone (TDZ), which is the time period between hoisting and actual initialization.