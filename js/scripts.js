
const div = document.querySelector(".title-div")


let titleBtn = document.querySelector("#btnTitle")
titleBtn.addEventListener(
  "click", 
    function titleButton (str){
    let newH1 = document.createElement("h1");
    newH1.textContent = str;
    div.appendChild(newH1)
    str = prompt("Title of your favorite movie?")
  });