const { use } = require("react");

function CreateBiscuitShape(name, price, qty, company, color) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.company = company;
  this.color = color;
}

let biscuit1 = new CreateBiscuitShape("Oreo", 10, 5, "Cadbury", "Chocolate");
let biscuit2 = new CreateBiscuitShape("Hide & Seek", 15, 8, "Britannia", "Brown");
let biscuit3 = new CreateBiscuitShape("Treat", 12, 10, "Britannia", "Cream");

console.log(biscuit1);
console.log(biscuit2);
console.log(biscuit3);



// Pencil Object Constructor Function
// with method to write name on document
// and prototype property Brand
// Create 3 pencil objects
// prototype = shared property for all objects

function CratePecil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  this.write = function () {
    let h1 = document.createElement("h1");
    h1.textContent = this.name;
    h1.style.color = this.color;

    document.body.appendChild(h1);
  };

}
CratePecil.prototype.Brand = "og";
let pencil1 = new CratePecil("Nataraj", 5, "blue", "Nataraj Co.");
let pencil2 = new CratePecil("Apsara", 7, "red", "Apsara Co.");
let pencil3 = new CratePecil("Camlin", 6, "green", "Camlin Co.");
pencil1.write();



// Class = blueprint for creating objects
// with constructor method
// Create 3 objects of the class
class CreateBox{
  constructor(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
  }

  writ(text){
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);

  }

  erase(){
    document.body.querySelectorAll("h1").forEach(e => e.remove());

  }
}

let box1 = new CreateBox("Box1", 20, "purple", "Box Co.");
let box2 = new CreateBox("Box2", 25, "orange", "Box Co.");
let box3 = new CreateBox("Box3", 30, "pink", "Box Co.");





//extend class = create a new class from existing class
class user{
  constructor(username, email){
    this.username = username;
    this.email = email;
  }
  write(text,color){
    let h2 = document.createElement("h2");
    h2.textContent = text;
    h2.style.color = color;
    document.body.appendChild(h2);
  }
}
class admin extends user{
  constructor(username, email, role){
    super(username, email);
    this.role = "admin";
  }
  remove(){
    document.body.querySelectorAll("h2").forEach(e => e.remove());
  }


}

let user1 = new user("john_doe", "john2005");
let user2 = new user("Bob","bob2005");
user1.write("Hello, " + user1.username + "! Your email is " + user1.email + ".","purple");
user2.write("Hello, " + user2.username + "! Your email is " + user2.email + ".","blue");

let a1 = new admin("admin_user", "admin2005", "admin");
a1.write("Welcome, " + a1.username + "! You have " + a1.role + " privileges.","red");