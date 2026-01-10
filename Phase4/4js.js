//Synchronous code execution in JavaScript => code is executed line by line in the order it appears
//Asynchronous code execution in JavaScript => code that does not block the main thread and allows other code to run while waiting for an operation to complete

//synchronous example 
console.log("Start");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("End");


//asynchronous example using setTimeout
console.log("Start");
setTimeout(() => {
  console.log("This is asynchronous");
}, 2000);


// //callback functions => functions passed as arguments to other functions and are executed after some operation is completed
// //callbach hell => when multiple nested callbacks make the code hard to read and maintain


function kcuhderbad(fn) {
  setTimeout(() => {
    fn();
  }, 1000);
}

kcuhderbad(function () {
  console.log("hey");
});

// Example of callback hell


function profieLekarAo(username, callback) {
  setTimeout(() => {
    console.log("Fetching profile for", username);
    callback({ username: username, age: 25 });
  }, 2000);



}

profieLekarAo("john_doe", function (profile)){
  console.log("Profile received:", profile);
}


//promise => an object representing the eventual completion or failure of an asynchronous operation

let promise = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10) + 1;

    if (rn > 5) {
      res("success " + rn);
    } else {
      rej("failure " + rn);
    }
  }, 3000);
});

promise
  .then(function (data) {
    console.log("Promise resolved with data:", data);
  })
  .catch(function (error) {
    console.log("Promise rejected with error:", error);
  });


//async/await => syntactic sugar over promises that allows writing asynchronous code in a synchronous manner

async function fetchData() {
  try {
    let data = await promise;
    console.log("Data received:", data);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}
fetchData();