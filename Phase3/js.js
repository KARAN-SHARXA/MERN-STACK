//-> dom
let ab = document.getElementById("ab");
console.dir(ab);

let bc = document.getElementsByName("ab");
console.dir(bc);


let h1 = document.querySelector("#h1");
console.log(h1);

let p = document.querySelector("#p");
p.textContent = "hiii";



//innerHtml,innercontent,innertext
//innerHtml is used to change the html

// getattribute // setattribute // remove

let a = document.querySelector("a");
a.setAttribute("href","https://www.google.com");


let b = document.querySelector("img");
b.removeAttribute("alt")


// createelement
let o = document.createElement("h1");
o.textContent = "hello ji kaise ho";
document.querySelector("div").prepend(o);



let bb=document.querySelector("h1");
bb.style.color = "pink"

