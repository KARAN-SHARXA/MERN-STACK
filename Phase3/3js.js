let nn = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  if (nn.value.length <= 2) {
    document.querySelector("small").style.display = "initial";
  } else {
    document.querySelector("small").style.display = "hidden";
  }
});
