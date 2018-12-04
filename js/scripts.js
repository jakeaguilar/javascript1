// const str = new String("Jake");
// console.log(str);
// // console.log(Object.getPrototypeOf(str));

// const arr = new Array("Jake", 25);
// console.log(arr);

// const num = new Number(42);
// console.log(num);

// const bool = new Boolean(true);
// console.log(bool);

// const person = {
//   name: "doodleBob"
// }
// console.log(person);

// const dog = new Object();
// dog.name = "Copper";
// console.log(dog);

// Old way of constructor functions
// function Animal(name, energy){
//   this.name = name;
//   this.energy = energy;

//   this.play = function(){
//     this.energy -= 5;
//   }
// }

// Animal.prototype.eat = function() {
// this.energy += 10;
// }



// const dog = new Animal("Dog", 9000);
// console.log(dog);
// console.log(dog.name);
// console.log(dog.energy);
// dog.play();
// console.log(dog.energy);
// dog.eat();
// console.log(dog.energy);
// const cat = new Animal("Cat", 5);
// console.log(cat);

// todo app example
// function Todo(text, isDone){
//   this.text = text;
//   this.isDone = isDone;

//   this.edit = function(){

//   }
// }

// TRY IT

// MY WAY
// function User() {
//   this.username = prompt("what is your username?");
//   this.password = prompt("What is your password?");
// }
// const user = new User();
// console.log(user);

// ADVANCED IN CLASS WAY
// function User() {
//   // Dont necessarily need this as it will be made on the fly from the functions
//   // this.username;
//   // this.password;

//   this.getCredentials = function() {
//     this.getName();
//     this.getPass();
//   }


//   this.getName = function() {
//    this.username = prompt("what is your username?")
//   }

//   this.getPass = function() {
//     this.password = prompt("What is your password?")
//   }
// }
// const user = new User();
// user.getStuff();

// console.log(user);


// CLASSESS

// OLD WAY, constructor function
function AnimalOld(name, energy) {
  this.name = name;
  this.energy = energy;

  this.play = function(){
      this.energy -= 5;
    }
}

// NEW WAY, with Classes
class Animal {
  constructor(name, energy){
    this.name = name;
    this.energy = energy;

    }

    play() {
      this.energy -= 5;
  }
}

class Dog extends Animal {
  constructor(name, energy, says) {
    super(...arguments);

    this.says = says;
  }

  speak() {
    console.log(`Dog says: ${this.says}`);
  }
}

const doge = new Dog("Doge", 50, "Woof");
console.log(doge);
doge.play();
console.log(doge);
