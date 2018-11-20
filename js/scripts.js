// ARRAYS
{
    // const firstArray = ["Jake", 25, false, "Fresno", ["Jen","Madyson","Sam"]];
    // console.log(firstArray[4][1]);

    // const geekwise = [["Web for Beginners", true], ["Mobile Friendly", true], ["Intro to JS", true]];
    // console.log(geekwise[1][0]); //mobile friendly
    // console.log(geekwise [0][0]); //web 4 beginners
    // console.log(geekwise[2][1]); //true
    // console.log(geekwise[1]); //whole second array

    // // TRY IT OUT
    // const bio = ["Deadpool", 13, true, 2011];
    // console.log(bio[1],bio.length);


    // MANIPULATE ARRAYS
    {
        // // IS ARRARY, like typeof determines if var is an array
        //     {
        //         const arr = [];
        //         Array.isArray(arr);
        //     }
        // // PUSH, adds item to the end of the array
        //     {  
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         console.log(names);
        //     }
        // // UNSHIFT, adds item to the beginning of the array
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //     }
        // // POP, removes the last item of an array
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //         names.pop(); //removes luna
        //         console.log(names);
        //     }
        // // SHIFT, removes the first item of an array
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //         names.pop(); //removes luna
        //         console.log(names);
        //         names.shift(); //removes zach
        //         console.log(names);
        //     }
        // // SPLICE, removes elements at a designated position and can also add others
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //         names.pop(); //removes luna
        //         console.log(names);
        //         names.shift(); //removes zach
        //         console.log(names);
        //         names.splice(0, 1, "Jacob"); //selects the index number in the array, removes 1 element in the array, replaces the element with Jacob
        //         console.log(names);
        //         names.splice(3, 1, "Mads"); //selects the index number 4, removes the item, and replaces it with Mads
        //         console.log(names);
        //     }
        // // SLICE, makes a copy of the original indexes
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //         names.pop(); //removes luna
        //         console.log(names);
        //         names.shift(); //removes zach
        //         console.log(names);
        //         names.splice(0, 1, "Jacob"); //selects the index number in the array, removes 1 element in the array, replaces the element with Jacob
        //         console.log(names);
        //         names.splice(3, 1, "Mads"); //selects the index number 4, removes the item, and replaces it with Mads
        //         console.log(names)
        //         const coworkers = names.slice(1);//assigns slice to a var, then you can manipulate that array slice/copy
        //         console.log(coworkers);
        //     }
        // // INDEX OF, lists the index number of a specific item in an array
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         names.push("Luna");
        //         names.unshift("Zach");
        //         console.log(names);
        //         console.log(names[0]);
        //         names.pop(); //removes luna
        //         console.log(names);
        //         names.shift(); //removes zach
        //         console.log(names);
        //         names.splice(0, 1, "Jacob"); //selects the index number in the array, removes 1 element in the array, replaces the element with Jacob
        //         console.log(names);
        //         names.splice(3, 1, "Mads"); //selects the index number 4, removes the item, and replaces it with Mads
        //         console.log(names)
        //         const coworkers = names.slice(1);//assigns slice to a var, then you can manipulate that array slice/copy
        //         console.log(coworkers);
        //         const specificIndex = [1,2,3,4,5,"Jake",7,8,9]
        //         console.log(specificIndex.indexOf("Jake"));
        //     }
        // // LAST INDEX OF, returns the last index of a specified item in an array
        //     {
        //         const luckyNums = [2,3,4,2,3,6,7,8,6,7];
        //         console.log(luckyNums.indexOf(2));
        //         console.log(luckyNums.lastIndexOf(2));
        //     }
        // // REVERSE, reverses the order of the array
        //     {
        //         const names = ["Jake", "Sam", "Ali", "Madyson"];
        //         console.log(names.reverse());
        //     }
        // // SORT, sorts your array
        //     {
        //         const luckyNums = [2,3,4,2,3,6,7,8,6,7];
        //         console.log(luckyNums.sort());
                

        //     }
    }

    // TRY IT OUT
    {
        // const favMovie1 = ["Inception", "Dominic"];
        // const favMovie2 = ["SW:ESB", "Darth Vader"];
        // const favMovie3 = ["LOTR: RoTK", "Aragorn"];
        // const favMovie4 = ["The Matrix", "Morpheous"];
        // const favMovie5 = ["Avengers: IW", "Iron Man"];
        // const movieArray = [favMovie1, favMovie2, favMovie3, favMovie4, favMovie5];
        // const movieTitles =[movieArray[0][0],movieArray[1][0], movieArray[2][0], movieArray[3][0], movieArray[4][0]];
        // console.log(movieTitles);
        // const favAndLeastFav = [movieArray[0], movieArray[4]];
        // console.log(favAndLeastFav);
        // console.log(movieArray.length);
    }
}

// LOOPS
{
    // WHILE LOOPS, Dont do while loops, were better than this...
    {
        // let counter = 0;
        // while (counter <= 10){
        //     console.log(counter);
        //     counter++;
        // }
    }

    // FOR LOOPS
    // for(intialization: so i is set to 0, condition: so as long as i is less than or equal to 10 run, final-expression: used to increment the condition  )
    {
        // for(let i = 0; i <= 10; i++ ){
        //     console.log(i);
        //     // console.log("Jake");
        // }

        // const names = ["Luke", "Leia", "Anakin", "Vader"];
        // for(let i = 0; i <= names.length-1; i++){
        //     console.log(names[i]);
        // }

        // const albums = ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III"];
        // for (let i = 0; i < albums.length; i++){
        //     console.log(albums[i]);
        // }
    }

    // FOR OF LOOPS
    {
        // const albums = ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III"];
        // const names = ["Luke", "Leia", "Anakin", "Vader"];
        // for(let name of names){
        //     console.log(name);
        // }

        // for(let album of albums){
        //     console.log(album);
        //     if(album === "Led Zeppelin II"){
        //         break;
        //     }
        // }
    }

    // FOR EACH LOOPS 
    {
        // const albums = ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III"];
        // const names = ["Luke", "Leia", "Anakin", "Vader"];
        // names.forEach(name => console.log(name));
    }

    // FOR IN LOOPS
    {
        // const person = {
        //     name: "Jacob",
        //     age: 25
        // }
        // console.log(person);

        // for(let key in person){
        //     console.log(person[key]);
        // }
    }

    // OBJECT STORING USER INPUT
    {
        // const user = {};
        // console.log(user);
        // user.name = prompt("Whats yo name?");
        // user.age = +prompt("Whats yo age?");
        // console.log(user);
    }

    // TRY IT OUT
    var movieArray = [];

    let favMovie1 = ["Inception", "Dominic", 2008];
    let favMovie2 = ["SW:ESB", "Darth Vader", 1999];
    let favMovie3 = ["LOTR: RoTK", "Aragorn", 2006];
    let favMovie4 = ["The Matrix", "Morpheous", 1999];
    let favMovie5 = ["Avengers: IW", "Iron Man", 2018];
    
    movieArray.push(favMovie1,favMovie2,favMovie3,favMovie4,favMovie5);

    for(let i = 0; i < movieArray.length; i++){
        if(movieArray[i][0] === "Inception"){
        alert(`${movieArray [i][0]} ${movieArray[i][1]}`)
        }
    }
    
}