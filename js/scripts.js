// DAY 3
    // COMPARISON OPERATORS

        // LOOSE EQUAL (==) checks for the value, NOT TYPE
        console.log( "42 == 42");

        // STRICT EQUAL (===) checks for same value AND type
        console.log( "42" === 42);

            // OBJECTS CAN NEVER BE EQUAL
            // WILL RETURN FALSE
                const obj1 = {
                    name: "Jake"
                };

                const obj12 = {
                    name: "Jake"
                };
                console.log(obj1 === obj2);

            // IN JS, ARRAYS ARE OBJECTS!!!
                const arr1 = ["cat"];
                const arr2 = ["cat"];
                console.log(arr1 === arr2);

        // LOOSE NOT EQUAL (!=) checks if values are not equal
        console.log( "42" != 52);

        // STRICT NOT EQUAL (!==) checks if values are not equal AND/OR not the same type
        console.log( "42" !== 52);

        // GREATER THAN (>)
        console.log( 52 > 51);    

        // LESS THAN (<)
        console.log( 52 < 51); 

        // LESS THAN OR EQUAL (<=)
        console.log( 51 <= 52);
        console.log( 51 <= 51);

        // GREATER THAN OR EQUAL (>=)
        console.log( 53 >= 52);
        console.log( 53 >= 53);


        //PARSEINT TRICK!!!!!!!! 
        // + = parseInt()
        const num = '42';
        console.log(num);
        console.log(+num);