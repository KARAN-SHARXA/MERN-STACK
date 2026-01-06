tm = setTimeout(function () {
  console.log("hhh");

}, 5000)
clearTimeout(tm)


let cout = 10;
setInterval(function () {
  if(cout >=1){
    cout--;
    console.log(cout);
    

  }




}, 1000);

// setInterval = repeat again agani work
// steTimeout = only once perform the work