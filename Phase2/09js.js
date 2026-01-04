//  Object is a collection of key–value pairs.

let person = {
  name : "John",
  age : 22,
  city: "New York"
}
console.log(person);
console.log("great");



console.log(person.age);
person.age = 23;
person.country = "india";
console.log(person);


let p = {
  name:"Amit",
  greet:function(){
    console.log("hello"+this.name);
    
  }
}

p.greet()


let student = {
  name: "Rahul",
  marks: {
    math: 80,
    science: 75
  }
};

console.log(student.marks.math); // 80





let user = {
  name: "Karan",
  age: 22,
  city: "Delhi"
};

for (let key in user) {
  console.log(key, user[key]);
}





// refernce copy
// let obj1 = {a:10};
// let obj2 = obj1;

// obj2.a = 20;
// console.log(obj1.a);


// // proper copy
// let obj1 = { a: 10 };
// let obj2 = { ...obj1 };

// obj2.a = 30;
// console.log(obj1.a); // 10 ✅


