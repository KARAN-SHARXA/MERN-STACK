// function is a resuable bock of code

// function declaration
function dance() {
  console.log("dance");

}

dance();


// function expression
let fnc = function () {
  console.log("here i want");

}

fnc()


//fat arraow fnc


let fnc1 = (va) => {
  console.log(`${va} naach raha hai`);

}

fnc1("karan")
fnc1("mohit")



function add(v1, v2) {  //parameters
  console.log(v1 + v2);

}
add(1, 2) // argument



//default parametres
function add1(v1 = 0, v2 = 0) {
  console.log(v1 + v2);


}
add1();


//rest

function abcd(...val) {
  console.log(val);


}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9)



//


function abcde() {
  return 12;
}
let val = abcde();
console.log(val);



function ff(v) {
  return 12 + v;
}


let val1 = ff(23);
console.log(val1);


//first class function ->function treat as value

let a1 = function (val) {
  val();

}
a1(function () {

  console.log("hey");


})


//high order function ->function that return functin or accept fucntion in its parameter


function a2(val2) {

  val2();
  return function () {
    return "hi"

  }


}



let a3 = a2(function () {

  console.log("hello");


})
console.log(a3());




// pure vs impure function

// pure -> donot change outside value
// let a = 12;
// function a3(){
//   console.log("hhh");


// }

// // impure -> change outside value
// function a7(){
//   a++;
// }


//closures -> function that return one function and return function use the variable of parent function,function + required adata
//Closure → A function that returns another function, and the returned function uses variables of its parent function.
// This combination of function + required data (lexical scope) is called a closure.



function abcdef() {
  let a = 12;
  return function () {
    console.log(a);

  }
}

let hh = abcdef()
hh()






function init() {
  let name = "mizi";

  function displayName() {
    console.log(name);

  }
  displayName();
}

init();


function outer() {
  let a = 10;


  function inner() {
    console.log(a);

  }

  return inner;
}

let result = outer();
result()

// IIFE -> Immediately Invoked Function Expression
// (function(){

//   console.log("hi bro ");
  

// })();



//hoisting -> move all declaration on top
//function expression is not host , all other type of function are hosted






//Practice function of loops



let multiply = (ab,bb)=>{
  console.log(ab*bb);
  
}


multiply(3,4);





let addnumbers =(x=0,y=0)=>{
  return x*y;

}
let rs=addnumbers(2,3);
console.log(rs);

let square =(n)=>{
  return n*n;
}
console.log(square(5));






let greet = (name="guest")=>{
  return `hello,${name}`;
  
}
console.log(greet("karan"));
console.log(greet());



let findmax =(...numbers)=>{
  return function(){
    return Math.max(...numbers);

  }
}

let maxfinder = findmax(1,2,3,4,5,6,7,8,9);
console.log(maxfinder());




let closureexample = ()=>{
  let count =0;
  return ()=>{
    count++;
    return count
    
  }
}


let counter = closureexample();
console.log(counter());
console.log(counter());
console.log(counter()); 



(function(){
  console.log("hu");
  
})();