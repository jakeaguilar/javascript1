    // DAY 3 TAKE HOME

    const askName = prompt("What is your first and last name?", "John Doe").toLowerCase();
    if(askName.toLowerCase() !== null && askName.toLowerCase() !== ""){
        let favColor = prompt(`Okay ${askName}, what is your favorite color out of the choices provided?, Colors: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White,or Gray`);
        switch (favColor.toLowerCase())
        {
            case "red":
            alert(`${favColor}, the color of the sith, you desire UNLIMITED POWAAHH ${askName}!!`);
            break;

            case "orange":
            alert(`${favColor}, according to legends, ${askName} possessed an ability for negotiation, possibly even aggressive negotiations... `);
            break;

            case "yellow":
            alert(`${favColor}, ${askName}, you are a rounded out Jedi, and are both adept in the study of the force and its combat applications.`);
            break;

            case "green":
            alert(`${favColor}, used by Jedi consulars, ${askName}, you prefer to reflect and study on the mysteries of the Force.`);
            break;

            case "blue":
            alert(`${favColor}, ${askName}, you are a Jedi guardian and are trained to use the force on a more physical level to protect the Jedi order.`);
            break;

            case "pink":
            alert(`${favColor}, ${askName} uhhhhh.... you have a pretty lightsaber color. Good job, i guess...`);
            break;

            case "purple":
            alert(`${favColor}, ${askName} hold on a minute... MACE, YOURE ALIVE?!?!?! `);
            break;

            case "black":
            alert(`${favColor}, ah much like the Dark Saber used by Pre Visla, ${askName}, you have sound taste.`);
            break;

            case "white":
            alert(`${favColor}, able were you to purify tainted kyber crystals.. not bad ${askName}.  `);
            break;

            case "gray":
            alert(`${favColor}, havent heard of gray lightsabers in Star Wars yet.... soo, ${askName}, youre now a Gray Jedi, congratulations! `);
            break;

            case "grey":
            alert(`${favColor}, havent heard of gray lightsabers in Star Wars yet.... soo, ${askName}, youre now a Gray Jedi, congratulations! `);
            break;

            case "":
            alert(`You didnt specify a color ${askName}!`);
            // let favColor = prompt(`Okay lets try this again ${askName}, what is your favorite color out of the choices provided?, Colors: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White,or Gray`);
            break;

            default:
            alert(`${favColor} was not one of the choices provided before, refresh the page and try again!`);
            // let favColor = prompt(`Okay lets try this again ${askName}, what is your favorite color out of the choices provided?, Colors: Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White,or Gray`);
            break;
        }
        }
        else if(askName.toLowerCase() == null || askName.toLowerCase() == ""){
        let askName = prompt("Hello?! you didnt enter your name! What is your first and last name?", "John Doe");
        }