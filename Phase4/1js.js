// scope => global scope, function scope, block scope

//function scope = variables defined inside a function are not accessible outside the function
//global scope = variables defined outside any function are accessible everywhere

//block scope = variables defined inside a block (e.g., inside { }) using let or const are not accessible outside the block

//function scope example
function abcd(){
  var a = 12;
}


var a = 10; // global scope

if(true){
  let b = 20; // block scope
  const c = 30;
}


//execution context -> where the code is executed
//global execution context -> code that is not inside any function
//function execution context -> code that is inside a function

function test(){
  var x = 10;
  var y = 20;
  console.log(x + y);
}

//lexical scope -> inner functions have access to variables defined in their outer functions
function outer(){
  var outerVar = "I am from outer function";
  function inner(){
    console.log(outerVar);
  }
}


//dynamic scope -> functions are executed in the context of the caller, not where they are defined


//closures -> inner functions that have access to variables from their outer function even after the outer function has executed
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

// advanced closure example=private variables,global namespace pollution avoidance