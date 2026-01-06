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
a.setAttribute("href", "https://www.google.com");

let b = document.querySelector("img");
b.removeAttribute("alt");

// createelement
let h2 = document.createElement("h3");
h2.textContent = "hey mukehs";
document.querySelector("div").prepend(h2);

let h1 = document.querySelector("#h1");
h1.classList.add("hulu");

let buynow = document.querySelector(".buy-now");
console.dir(buynow);

let heading = document.querySelector("#h1");
heading.textContent = "welcome to game";

let q = document.querySelectorAll("li");
q.forEach((element) => {
  console.log(element.textContent);
});

let img = document.querySelector("img").setAttribute("alt", "karan");

let h8 = document.createElement("h6");
h8.textContent = "kua";
document.querySelector("body").append(h8);
