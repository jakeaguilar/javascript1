 // ALERTS, CONFIRMS, PROMPTS
        
        // // Alerts
        // alert("Hello there...");

        // // Confirms
        // const response = confirm("are you sure you want to do that?");
        // console.log(response);

        // // Prompts
        // const favMovie = prompt("What is your favorite movie?");
        // console.log(favMovie);

        // // This returns a string
        // const favNum = prompt("whats your fav number?");
        // console.log(favNum);
        
        // // parseInt can convert a string to a number 
        // const realNum = parseInt(favNum);
        // console.log(realNum);

        // // toString can convert a num to a string
        // const num = 25;
        // console.log(num.toString);

// Day 2 Take Home

//Name part
const firstName = prompt("Please enter your first name.");
const lastName = prompt("Please enter your last name.");
const fullName = `${firstName} ${lastName}`
console.log(firstName);
console.log(fullName);
alert(lastName);

// Date Part
const userBday = new Date(prompt("When is your birthday?"));
confirm(`${userBday}: is this correct?`);
const bio = `Name: ${fullName}\nBirthday: ${userBday}`;
alert(bio);