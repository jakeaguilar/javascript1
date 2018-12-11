{
  // function someFunction (name, age, ...otherArgs){
//   console.log(name);
//   console.log(otherArgs);
//   otherArgs.forEach(a => console.log(a));
// };

// someFunction("Jake", 25, "Red", true);


// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// console.log([...arr1,...arr2]);

// ARRAY DESTRUCTURING
// const toDoList =["dishes", "lawn", "set up xmas tree"];

// console.log(toDoList);

// const [ firstItem, secondItem, thirdItem ]= toDoList;
// // ABOVE IS SAME AS BELOW
// // const firstItem = toDoList[0];
// // const secondItem = toDoList[1];
// // const thirdItem = toDoList[2];

// OBJECT DESTRUCTURING
// const person = {
//   name: "Jake",
//   age: 25,
//   wife: {
//     name: "Olivia Wilde",
//     age: 29,
//   }
// }

// const { name } = person;
// console.log(name);

// const { name: jake } = person;
// console.log(jake);

// const { name } = person.wife;
// console.log(name);
}
// FETCH API


// function getAllCharacters(url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const pagination = data.info.next;
//       if(pagination) {
//         getAllCharacters(pagination);
//       }

//       makeCard(data);
//     })
//     .catch(error => console.log(error))
// }

// ASYNC FUNCTION
async function getAllCharacters(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pagination = data.info.next;
        if(pagination) {getAllCharacters(pagination)}
    makeCard(data);
  }
  catch(error){
    console.log(error);
  }

}

getAllCharacters("https://rickandmortyapi.com/api/character/");

function makeCard(data) {
  console.log(data);
  // const characters = data.results; same as below
  const { results: characters } = data;
  console.log(characters) 

  characters.forEach(character => {
    const card = document.createElement("div");
    card.classList= "card";
    card.innerHTML = `
    <img class="card-img-top" src="${character.image}">
    <div class="card-body">
      <h2 class="card-title">${character.name}</h2>
      <p class="card-text">Species: ${character.species}</p>
      <p class="card-text">Location: ${character.location.name}</p>
    </div>
    `;
    document.body.append(card);
  })

}