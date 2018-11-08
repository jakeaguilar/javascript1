// DAY 2

    // // JS Data Types, there are 7 types, only some will be shown
    //     // String
    //     var firstName = "Jake";


    //     // Number
    //     var favNum = 13;

    //     // Boolean
    //     var bool = true;
    //     var secBool = 1;

    //     // Undefined
    //     var mystery;
    //     console.log(mystery);

    //     // Null:
    //     // is the lack of value

    //     // Object
    //     var nameTwo = new String("Aguilar");
    //     console.log(nameTwo);

    //     // Symbol, 7th data type
    //     console.log(typeof Symbol("id"));

    // // BLOCK AND SCOPE

    //     // Global Scope
    //     // This variable is declared with the global scope of the app, this variable should also be accessible in other functions as well
    //     var date = "today";
    //     console.log(date);

    //     // EXAMPLE OF SCOPE, name is equal to luke at first, but then reevaluated within the scope to norma. Then the var name is now set to norma in the global scope
    //     var name = "Luke";
    //     {
    //         var name = "Norma";
    //         console.log(name);
    //     }

    //     console.log(name);

    //     function example() {
    //         //Within the curly braces is the scope, where as only the code within the braces are only within the scope of the function.
    //     }

    // // Variables
    // // USE CONST AND LET to declare variables, dont use VAR

    //     // VAR
    //     // VARs are declared globally no matter where you assign them
    //     var nickName = "Jlo"
    //     console.log(nickName);

    //     // LET
    //     // LET lets you assign variables locally from with inside the scope, and not pollute the global scope
    //     var lastName = "Aguilar";
    //     console.log(lastName);
    //         {
    //             let lastName = "dum dum"
    //             console.log(lastName);
    //         }
    //     console.log(lastName);

    //     // CONST
    //     // CONST is strict, and wont let you rename
    //     const callsign = "ctuhlhu";
    //     console.log(callsign);
        
    //     // Should throw an error because the varialbe callsign was already defined above and you cant reevaluate const variables
    //     const callsign = "turd"
    //     console.log(callsign);

    // // String Concatentation

    //     // ES5 Way
    //     const greeting = "Hello there ";
    //     const name = "jake";
    //     console.log(greeting + name + ".");
        
    //     console.log("blah blansinfs disnd ien ien " + name + "sfndjkndusfnjdu fu dnfiu dfuidn  uifnd" );

    //     // ES6 Way
    //     console.log(`${greeting} ${name}. how are you doing today?`);

    // PREDEFINED OBJECTS IN JS, only some...

        // // Setting variable date equal to the Date object and then logging teh variable date
        // const date = new Date();
        // console.log(date);

        // // Checking string length
        // // .length
        // const string = "efuihdsfuisbdguiybdsiugbsiubsdf"
        // console.log(string.length);

        // // Number
        // const num = new Number(42);
        // const num2 = 42;

        // console.log(num == num2);

        // // Arrays
        // const array = [1,2,3]
        // const array2 = new Array('1,2,3');
        // const arrayMixed = ["jake", 25, true];

        // console.log(arrayMixed);

        // // Objects
        // const obj = {
        //     name: "Jake",
        //     age: 25
        // };
        // console.log(obj);

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