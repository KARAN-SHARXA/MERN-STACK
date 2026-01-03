
// use for loop when number of iteration is known
for(let i = 1;i<=5;i++){
  console.log(i);
  
}

// while loop when number of iteration is not known

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
// runs at least once


let i2 = 10;

do {
  console.log(i2);
  i2  ++;
} while (i2 < 5);


let arr = [10, 20, 30];

for (let val of arr) {
  console.log(val);
}




let person = {
  name: "Karan",
  age: 20
};

for (let key in person) {
  console.log(key, person[key]);
}

