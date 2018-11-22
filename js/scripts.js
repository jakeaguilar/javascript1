// ARRAY PRACITCE 
{
    // const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];

    // leastFavoriteTeams.unshift("Lakers");
    // console.log(leastFavoriteTeams);
    // leastFavoriteTeams.push("Ohio State");
    // console.log(leastFavoriteTeams);
    // leastFavoriteTeams.splice(0, 1);
    // console.log(leastFavoriteTeams);
    // leastFavoriteTeams.unshift("Patriots");
    // console.log(leastFavoriteTeams);

    // /**
    //  * 1) Add 'Lakers' to the front of the leastFavoriteTeams array
    //  * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
    //  * 3) Remove 'Patriots' from the leastFavoriteTeams array
    //  * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
    //  * 5) Console log the array to see if you did everything right
    //  *
    //  * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
    //  */

    // const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];

    // console.log(heroes);
    // console.log(heroes.reverse());
    // heroes.splice(1, 0, "Ember Spirit");
    // console.log(heroes);
    // heroes.pop();
    // console.log(heroes);
    // heroes.shift();
    // console.log(heroes);
    // heroes.unshift("Shadow Fiend");
    // console.log(heroes);

    /**
     * 1) Reverse the heroes array
     * 2) Add 'Ember Spirit' after the first index of the heroes array
     * 3) Remove the last member of the heroes array
     * 4) Remove the first item of the heroes array
     * 5) Add 'Shadow Fiend' to the beginning of the heroes array
     * 6) Console log the array to see if you did everything right
     *
     * -> ['Shadow Fiend', 'Phantom Lancer', 'Ember Spirit']
     */
}

// FUNCTIONS
{
    // ANONYMOUS FUNCTION
    // function () {

    // }

    // NAMED FUNCTIONS
    {
        // function add(a,b){
        //     console.log(a + b);

        // }
        // add(2,2);

        // function subtract(a, b){
        //     console.log(a - b);
        // }
        // subtract(435, 43534);
    }

    // FUNCTION DECLARATION V EXPRESSIONS
    {
        //Function Declaration
        // function logSomething(){
        //     console.log("Something");
        // }
        // logSomething();

        // //Function Expression
        // const logSomethingElse = function(){
        //     console.log("something else");
        // }

        
        // Scope example
        {
            // function logName(){
            //     const name = "Jake";
            //     console.log(name);
            // }
            // console.log(name);
            // logName();


            // function answerToLife() {
            //     const num = 76;
            //     console.log(num);
            // }
            // console.log(num);
            // answerToLife();
        }
        // FAT ARROW FUNCTONS
        {
            // () => {

            // }

            // const add = (a, b) => {
            //     console.log(a + b);
            // }
            // add(345234, 2433434);

            // const sayName = name => {
            //     console.log(name);
            // }
            // sayName("Fido");
        }
        // TRY IT OUT
        { 
            // DOG AGE
            // function calcDogAge (dogAge){
            //     dogAge = (dogAge * 7);
            //     alert(`Your dog is ${dogAge} in dog years!`);
            // }
            // calcDogAge(+prompt("How old is your dog in human years?"));

            // LIFETIME SUPPLY
            // let currentAge = +prompt("How old are you?");
            // let dailyUse = +prompt("How much do you use a day?");
            // function calcLifetimeSupply(currentAge, dailyUse){
            //     const endOfLife = 80;
            //     if(isNaN(currentAge) || isNaN(dailyUse)){
            //         alert("Please enter a number!");
            //         let currentAgeSecondTry = prompt("Whats your Age?");
            //         let dailyUseSecondTry = prompt("How many per year?");
            //     }
            //     else{
            //         if(currentAge < 80){
            //             let supply = (endOfLife - currentAge) * (dailyUse * 365);
            //             alert(`You will need ${supply} to last until youre ${endOfLife}`)
            //         }
            //         else{
            //             alert("This is awkward...youre dead....")
            //         }
            //     }
            // }
            // calcLifetimeSupply(currentAge, dailyUse);

            // IN CLASS
            // function calcLifetimeSupply2(currentAge2, dailyUse2, maxAge){
            //     alert(((maxAge - currentAge2) * 365) * dailyUse2);
            // }
            // calcLifetimeSupply2(29, 3, 32);

            // BASEBALLTEAM NAME
            // function baseballTeamName(hometown, weather, animal) {
            //     alert(`${hometown} ${weather} ${animal}`)
            // }

            // baseballTeamName("Fresno", "Hurricane", "Grizzly")

            // // BASEBALL TEAM NAME WITH ARRAY
            // function baseballTeamName2 (arr) {
            //     alert(arr.join(" "));
            // }
            // const arr = ["Fresno", "Hurricane", "Grizzlies"];
            // baseballTeamName2(arr);
        }

        // RECURSION
        {
            // function getName(){
            //     const name = prompt("Whats yo name?")

            //     if(!name) {
            //         getName();
            //     }
            // }

            // getName();
        }
    }
}

// METHOD v FUNCTION 
{
    // class Person {
    //     constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    //     }

    //     sayName() {
    //         console.log(this.name);
    //     }

    //     howOld() {
    //         console.log(this.age);
    //     }
    // }

    // const jake = new Person ("Jake", 25);
    // const sam = new Person ("Sam", 22);

    // console.log(jake.howOld());
    // console.log(sam.howOld());





}

// TAKE HOME
{

    // FUNCTION ONE: SQUARE A NUMBER
    // function square(){
    //     let userNum = +prompt("What number do you want to square?");
    //     console.log(typeof(userNum));
    //     let userNumSquare = Math.pow(userNum, 2);
    //     console.log(`User Number Squared is: ${userNumSquare}`);
    //     if(isNaN(userNum)){
    //         square();
    //     }else{
    //         alert(`User Number Squared is: ${userNumSquare}`);
    //     }
    // }
    // square();
    
    // FUNCTION TWO: 

    //Capitalize
    function capitalize (string){
        if (typeof string !== 'string'){
            console.log("not a word bro");
        }else{
            let stringCap = string.charAt(0).toUpperCase() + string.slice(1)
            // let stringPeriod = string.length
            console.log(stringCap);
        }
    }
    //Period Add


    //String Reverse
    function reverseString(string) {
        let reversed = string.split("").reverse().join("");
        console.log(reversed);
        if (reversed == string){
            console.log("YOU ENTERED A PALINDROME");
        }else{
            console.log("Not a palindrome, but cool word doe...");
        }
    }
    
    
    let userString = prompt("Type a word");
    capitalize(userString);
    reverseString(userString);

    // IN CLASS








}