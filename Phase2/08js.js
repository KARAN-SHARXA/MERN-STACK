// array is js

let arr = [1,2,3,4,5,6];
console.log(arr[0]);

arr[2]=12;
console.log(arr);

// array and methods
let arr1 =[1,2,3,45]
arr1.push(7000); // add at the end
console.log(arr1);

arr1.pop();
console.log(arr1);// remove last item in array


arr1.shift();
console.log(arr1); // remove the first element in array

arr1.unshift(3);
console.log(arr1); // add first elemnt in array


let arr2 = [1,2,3,4,5]; // mod. the original array
arr2.splice(2,1);
console.log(arr2);


let arr3 = [12,3,4,4];
let newarr3 = arr3.slice(0,3); // do not change in original array
console.log(newarr3);


let arr4 = [1,2,3,4,5];  // reverse the array
arr4.reverse();
console.log(arr4);




// sort using another function  sort accept one function

let arr6 = [11,62,3,4,25];
let sr =arr6.sort(function(a,b){
  return a-b;
})
console.log(sr);



// Map filter reduce filter



// foreach
let arr7 = [11,62,3,4];
arr7.forEach((val)=>{
  console.log(val+5);
  
})


// map use when you want to create a new array according to privious array
let arr8 =[1,2,3,4,5];
let newarr8=arr8.map((val)=>{
   if(val>3){
    return val
   }
   else{
    return 0
   }
})
console.log(newarr8);


//reduse = create a one elemnt from all the array


let arr9 = [1,2,3,4,5,6]
let arr9new = arr9.reduce(function(a,v){
  return a+v;
},0)
console.log(arr9new);



//find 

let arr10 = [
  {id:1 ,key:1},
  {id:2 ,key:2}
];
let va = arr10.find(function(val){
  return val.key ===1;
});
console.log(va);


// destructer 

let arr11 = [1,2,3,4,5];
let [a,b,c] = arr1;
console.log(a);

// spread 
let arr12 = [1,2,3,4,5,6,7,8];
let arr13 = [...arr12];
console.log(arr13);




//practice













