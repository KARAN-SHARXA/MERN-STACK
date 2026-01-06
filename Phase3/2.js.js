let p = document.querySelector("p");
p.addEventListener("click", function () {
  p.style.color = "green";
});

let p1 = document.querySelector("p");
p.addEventListener("dblclick", function () {
  p.style.color = "pink";
  p.style.background = "blue";
});

let inp = document.querySelector("input");
inp.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});

//change event

let sel = document.querySelector("select");
let device = document.querySelector("#change");
sel.addEventListener("change", function (dets) {
  device.textContent = `${dets.target.value} Devise Selected`;
});


let form = document.querySelector("form");
form.addEventListener("submit",function(dets){
  dets.preventDefault();
})


// event bubling -> // when eventlinstener is not found in tag then it move to parent

document.querySelector("#nav")
.addEventListener("click",function(){
  alert("clicked");
})


// capturephase

