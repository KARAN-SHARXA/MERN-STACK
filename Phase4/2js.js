// //this keywor special keyword is used to refer to the current object in which context we are working
// //in global context , this refers to the global object (window in browsers, global in Node.js)
// console.log(this); //in browser it will log Window object



// //global scope

// function abcd() {
//   console.log(this);

// }
// abcd(); //in non-strict mode it will log Window object, in strict mode it will be undefined



// let obj = {
//   name: "karan",
//   sayName: function () {
//     console.log(this.name);

//   },
// };

// obj.sayName(); //it will log the obj object because this refers to the object that called the method


// call apply and bind
let obj = {
  name:"harsh",
  age:26,
};
function abcd(a,b,c){
  console.log(this.age,a,b,c);
  
}
abcd.apply(abj,[1,2,3,4])