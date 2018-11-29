// console.log(document.forms.loginForm.button)

// const btn = document.forms.loginForm.button;
// const firstName = document.forms.loginForm.firstName.value;
// const form = document.forms.loginForm;

// btn.addEventListener("click", (e) => {
//   const firstName = document.forms.loginForm.firstName.value;

//   //prevents the page from auto refreshing on the click
//   e.preventDefault();
//   console.log(firstName);
//   console.log("Clicked");
//   form.reset();
// });

// THIS
// console.log(this);

// OBJECT EXAMPLE
// const person = {
//   name: "Jake",
//   wife: {
//     name: "none",

//     sayName(){
//       console.log(this)
//       // console.log(this.name);
//     },
//   },


//   sayName() {
//     console.log(this);
//     // console.log(this.name);
//   }
// }

// person.sayName();

// console.log(person.wife.sayName());

// Object Example
// const person = {
//   firstName: "Jake",
//   lastName: "Aguilar",
//   age: 25,
//   wife: {
//     firstName: "Olivia",
//     lastName: "Wilde",
//     age: 25,
//     howOld() {
//       console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old!`)
//     }
//   },
//   howOld() {
//     console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old!`)
//   }
// }

// CALLSITE IS ALWAYS LEFT OF THE DOT!!!
// person.howOld();
// person.wife.howOld();

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// btn1.addEventListener("click", logThis);
// btn2.addEventListener("click", logThis);

// function logThis (){
//   console.log(this);
// }

// fat arrow functions goes to scope on level above
// btn1.addEventListener("click", () => {
//   // this.parentElement.style.display = "none";
//   console.log(this);
// });
// // regular functions stay in the scope
// btn2.addEventListener("click", function(){
//   console.log(this);
// });


// BUTTONS EXAMPLE
// const buttons = document.querySelectorAll("button");
// console.log("buttons", buttons);

// buttons.forEach(button => button.addEventListener("click", function() {
//   this.style.display= "none";
// }))

// const dog = {
//   name: "Fido",
//   says: "Wooof",
// }

// const cat = {
//   name: "She-ra",
//   says: "Meow"
// }

// const baldeagle = {
//   name: "Murica",
//   says: "FUCK YEAH",
// }

// function speak(location, status) {
//   alert(`${this.name} says: ${this.says} from ${location} and ${status}`);
// }

// speak.call(dog, "The Yard", "and is hungry");
// speak.call(cat, "nowhere near me...", "wants to knock over shit");
// speak.call(baldeagle, "the Rockies", "is feeling FREEE" );

// difference between apply and call is that apply uses arrays
// speak.apply(dog, ["The Yard", "and is hungry"]);
// speak.apply(cat, ["nowhere near me...", "wants to knock over shit"]);
// speak.apply(baldeagle, ["the Rockies", "is feeling FREEE"]);

// function speak() {
//   alert(`${this.name} says: ${this.says}`);
// }

// const dogSays = speak.bind(dog);
// dogSays();

// const catSays = speak.bind(cat);
// catSays();

// const baldeagleSays = speak.bind(baldeagle);
// baldeagleSays();

class Person {
  constructor(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
  }

  sayName() {
    console.log(this.name);
  }
}

const jake = new Person("jake", 25, "black");
const madyson = new Person("Madyson", 20, "red");

jake.sayName();
madyson.sayName();