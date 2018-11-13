// DAY 3
    // // COMPARISON OPERATORS

    //     // LOOSE EQUAL (==) checks for the value, NOT TYPE
    //     console.log( "42 == 42");

    //     // STRICT EQUAL (===) checks for same value AND type
    //     console.log( "42" === 42);

    //         // OBJECTS CAN NEVER BE EQUAL
    //         // WILL RETURN FALSE
    //             const obj1 = {
    //                 name: "Jake"
    //             };

    //             const obj12 = {
    //                 name: "Jake"
    //             };
    //             console.log(obj1 === obj2);

    //         // IN JS, ARRAYS ARE OBJECTS!!!
    //             const arr1 = ["cat"];
    //             const arr2 = ["cat"];
    //             console.log(arr1 === arr2);

    //     // LOOSE NOT EQUAL (!=) checks if values are not equal
    //     console.log( "42" != 52);

    //     // STRICT NOT EQUAL (!==) checks if values are not equal AND/OR not the same type
    //     console.log( "42" !== 52);

    //     // GREATER THAN (>)
    //     console.log( 52 > 51);    

    //     // LESS THAN (<)
    //     console.log( 52 < 51); 

    //     // LESS THAN OR EQUAL (<=)
    //     console.log( 51 <= 52);
    //     console.log( 51 <= 51);

    //     // GREATER THAN OR EQUAL (>=)
    //     console.log( 53 >= 52);
    //     console.log( 53 >= 53);


    //     //PARSEINT TRICK!!!!!!!! 
    //     // + = parseInt()
    //     const num = '42';
    //     console.log(num);
    //     console.log(+num);
        
    // TRY IT OUT
    // const obiwan = "YOU WERE MY BROTHER ANAKIN!";
    // const obiwanObj = new String(obiwan);

    // if(obiwan == obiwanObj){
    //     console.log("obiwan and obiwanObj are loosely equal");
    // }else {
    //     console.log("obiwan and obiwanObj are not loosely equal");
    // }

    // if(obiwan === obiwanObj){
    //     console.log("obiwan and obiwanObj are strictly equal");
    // }else {
    //     console.log("obiwan and obiwanObj are not strictly equal");
    // }

        // ARITHMETIC OPERATORS, PEMDAS RULES APPLY

            // // Multiplication
                // 2 * 2 // 4
                // -2 * 2 // -4
                // Infinity * 0 // NaN
                // Infinity * Infinity // Infinity

            // // Division
                // 1 / 2      // returns 0.5 in JavaScript
                // 1 / 2      // returns 0 in Java 
                // // (neither number is explicitly a floating point number)
                
                // 1.0 / 2.0  // returns 0.5 in both JavaScript and Java
                
                // 2.0 / 0    // returns Infinity in JavaScript
                // 2.0 / 0.0  // returns Infinity too
                // 2.0 / -0.0 // returns -Infinity in JavaScript

            // // Modulous
                // 12 % 5 // 2
                // -1 % 2 // -1
                // 1 % -2 // 1
                // NaN % 2 // NaN
                // 1 % 2 // 1
                // 2 % 3 // 2
                // -4 % 2 // -0
                // 5.5 % 2 // 1.5

            // // Addition
                // Number + Number -> addition
                // 1 + 2 // 3

                // // Boolean + Number -> addition
                // true + 1 // 2

                // // Boolean + Boolean -> addition
                // false + false // 0

            // // Subtraction
                // 5 - 3 // 2
                // 3 - 5 // -2

            // // NaN (not a number)
            // console.log(0/0);

            // // Weird JS math things
            // console.log(0.1 + 0.2) // -> 0.300000000000000004
            // console.log(.99999999999999999999999999) //-> 1

            // INCREMENT OPERATORS

                // // INCREMENT UP BY 1
                // let number = 1;
                // console.log("Number: ", number);
                // number++;
                // console.log("Number: ", number);
                // number++;
                // console.log("Number: ", number);

                // // DECREMENT DOWN BY 1
                // number--;
                // console.log("Number: ", number);

        // ASSIGNMENT OPERATORS
            // let cartTotal= 0;
            // const item = 9.99;
            // const item2 = 7.99
            // const discount = 5.00;
            // const halfDiscount = .5;

            // // +=
            // console.log(cartTotal += item);
            // console.log(cartTotal += item2);

            // // -=
            // console.log(cartTotal -= discount);

            // // *=
            // console.log(cartTotal *= halfDiscount) //50% discount using multiplication of halfDiscount variable

            // // /=
            // console.log(cartTotal /= halfDiscount) //Works the same as above

        // TRY IT OUT 2
            // let firstNum = +prompt("Give me a number, any number", 10);
            // let secondNum =  +prompt("Give me a second number, any number", 10);
            // if(!isNaN(firstNum) && !isNaN(secondNum)){
            //     alert(`Your total is:  ${(firstNum) + (secondNum)}`);
            // }
            // else if(isNaN(secondNum)){
            //     secondNum = prompt("STAHP it! Your second input was not a number!");
            //     alert(`Your total is:  ${(firstNum) + (secondNum)}`);
            // }
            // else
            // {
            //     alert("you dumb");
            // }
            // // Basic Way
            // // const total = firstNum + secondNum;
            // // alert(`Your total: ${total}`)

    // CONTROL FLOW

    // IF/ELSE
    {
        // if (true) {
        //     console.log("AYY this be true")
        // } else {
        //     console.log("False. -Dwight")
        // }

        // const firstName = "Jacob";
        // // const firstName = "Ben"
        // // const firstName = "Jabba"

        // if( firstName === "Jacob"){
        //     console.log("Your name is Jacob");
        // }else if (firstName === "Ben"){
        //     console.log("Hey your name is ben");
        // } else {
        //     console.log("Your name is not Jacob or Ben, life must suck...");
        // }

        // const magicNum = 1;
        // // const magicNum = 2;
        // // const magicNum = 4;
        
        // if( magicNum === 1){
        //     console.log(1);
        // }else if (magicNum === 2){
        //     console.log(2);
        // }else {
        //     console.log("No magic number for you!")
        // }

        // IF/ELSE WITH &&(AND) also ||(OR)
        {
            // && both sides of evaluation must be true, or it will not run!
            // if (true && true) {
            //     console.log("Success!")
            // }

            // if (true && false) {
            //     console.log("Success!")
            // }

            // if (false && false) {
            //     console.log("Success!")
            // }

            // || if one of the sides of the evaulation is true, it will run!
            // if (true || true) {
            //     console.log("Success!")
            // }

            // const age = 25;

            // if (age >= 21 && age <= 80){
            //     console.log("You are over 21 but less than 80!");
            // }

            // if (age === 21 && age === 80){
            //     console.log("You are either 21 or 80");
            // }

            // const lastName = "Aguilar";

            // if(lastName) {
            //     console.log(`Your last name is: ${lastName}`);
            // }

            // const userName = prompt("What is your first name?");

            // if (userName !== null || userName !== ""){
            //     alert (`Your first name is ${userName}`);
            // }else{
            //     alert("You did not provide your name, please provide your name!");
            // }
        }
    }
    // TERNARIES
    {
        // const userName = prompt("What is your first name?");

        // userName ? alert(`Your first name is ${userName}`) : alert("You did not provide your name, please provide your name!");
    
    }
    // SWITCH/CASE
    {
        // const superHero = prompt("Who is your favorite superhero?");
        // superHero.toLowerCase();
        // switch(superHero){
        //     case "Batman":
        //         console.log("Batman is legit")
        //         break;
        //     case "Superman":
        //         console.log("Superman is overrated")
        //         break;
        //     default:
        //         console.log(`Sorry, ${superHero} is not a superhero!`)
        // }
    }

    // TRY IT OUT 
    // let userAge = confirm("Are you over the age 18?");
    // if(userAge){
    //     let isUnder80 = confirm("Are you under 80 years old?");
    //     if(isUnder80){
    //         let isCool = confirm("Do you love Star Wars?");
    //         if(isCool)
    //         {
    //         alert("you are soo cool!");
    //         }
    //     }
    // else{
    //         let isElderly = confirm("Do you like prunes");
    //     }
    // }else{
    //     alert("You were shot first!");
    // }

    // User age is a number instead
    const age = +prompt("What is your age?");
    if (age >= 18 && age <= 80){
        let likesSW = confirm("Do you like Star Wars?");
        if (likesSW == true){
            alert("You shot first!");
        }else{
            alert("you were shot first!");
        }
    }else if (age > 80){
        let likesPrunes = confirm("Do you like prunes?");
        if (likesPrunes == true){
            alert("Damn youre old...");
        }else {
            alert("Well, i guess youre okay...");
        }
    }else {
        alert("Get stepping youngin'");
    }