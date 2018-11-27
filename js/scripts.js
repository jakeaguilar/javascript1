// Vars
// const title = document.querySelector("#title");
// // title.textContent = "My Page Title";
// title.innerHTML = "<h1>My Title</h1>";

// const title = document.createElement("h1");
// // document.body.appendChild(title);
// title.textContent = "My Page Title";

// const list = document.createElement("ul");
// // document.body.appendChild(list);

// const cat1 = document.createElement("li");
// cat1.textContent = "Dre";

// const cat2 = document.createElement("li");
// cat2.textContent = "Em";

// const cat3 = document.createElement("li");
// cat3.textContent = "Tupac";

// list.append(cat1, cat2, cat3);
// const js = document.querySelector("script");

// document.body.insertBefore(title, js);
// document.body.insertBefore(list, title);

// const button = document.createElement("button");
// button.textContent = "Submit";
// button.id = "my-btn";
// button.className = "btn btn-success";
// button.classList.replace("btn-success", "btn-info");
// document.body.appendChild(button);

// title.classList.add("text-center");

// button.classList.remove("btn-info");

// button.addEventListener("click", () => {
//   title.classList.toggle("hidden");
// });

//FizzBuzz
let body = document.querySelector("body");
let script = document.querySelector("script");

// function fB(n){
//   for(let i = 1; i <= n; i++){
//     let p = document.createElement("p");
//     if(i % 3 === 0 && i % 5 === 0){
//       p.textContent = ` ${i}: FIZZBUZZ`;
//       //console.log("Fizz");
//     }
//     else if(i % 3 === 0){
//       p.textContent = `${i}: FIZZ`
//       //console.log("FIZZ");
//     }
//     else if(i % 5 === 0){
//       p.textContent =  `${i}: BUZZ`
//       //console.log("BUZZ");
//     }
//     else{
//       p.textContent = i;
//     }
//     body.insertBefore(p, script);
//   }
// }

// fB(+prompt("What number do you want to input?"));

function fB(n){
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      createItem(i, "FIZZBUZZ");
      //console.log("Fizz");
    }
    else if(i % 3 === 0){
      createItem(i, "FIZZ");
      //console.log("FIZZ");
    }
    else if(i % 5 === 0){
      createItem(i, "BUZZ");
      //console.log("BUZZ");
    }
    else{
      createItem(i);
    }
  }
}

function createItem(i, str) {
  let p = document.createElement("p");
  str ? p.textContent = `${i} ${str}` : p.textContent = i;
  body.insertBefore(p, script);
}

fB(+prompt("What number do you want to input?"));

