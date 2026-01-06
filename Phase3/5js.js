// storage  --> browser me data save krna
//localstorage -> store data in database
// sessionstorage ->temporarily store data



//localStorage
localStorage.setItem("name","harsh");
let val = localStorage.getItem("name");
localStorage.removeItem("name")

//cookies ->use to store samll data data in kb
localStorage.setItem("friends",JSON.stringify(["akas","harsh","mukesh"]))