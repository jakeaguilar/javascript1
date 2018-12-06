
//TRY IT OUT
//1.
let btnTimeoutClear = document.querySelector("#btnTimeoutClear");
let btnIntClear = document.querySelector("#btnIntClear");
let timeoutAnswer = +prompt("How long do you wanna wait", "in seconds")
let intervalAnswer = +prompt("How long do you wanna wait in between", "in seconds")
let timeoutReference;
let intervalReference;
//2.
let quotes =["Be Kind", "Stay humble", "Shoot first", "Strike hard", "No Mercy"];
function createTimer(time, type){
    let endIndex = time.indexOf(" ");
    let parsedTime = parseInt(time.substring(0, endIndex));
    if(!isNaN(parsedTime)){
      parsedTime *= 1000;
      if(type === "timeout"){
        timeoutReference = setTimeout( alertRandomQuote, parsedTime);
      }else{
      //...
      intervalReference = setInterval( alertRandomQuote, parsedTime);
      }
  }else{
      //...
      console.log("oops...")
    }
  };
  function alertRandomQuote() {
    let maxIndex = quotes.length -1;
    let indexToChoose = Math.floor(Math.random() * maxIndex);
    alert(quotes[indexToChoose]);
  };
createTimer(timeoutAnswer, "timeout");
//3.
createTimer(intervalAnswer, "interval")
//4.
btnIntClear.addEventListener("click", () => {
  clearInterval(intervalReference);
});
btnTimeoutClear.addEventListener("click", () => {
  clearInterval(timeoutReference);
});