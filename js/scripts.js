//DAY 6
{
    //Querying the DOM
    {
        //Older Methods
        {
            //.getElementsByTagName(), selects an element by the tag name body
            {
                // const body = document.getElementsByTagName("body");
            }

            // .getElementsByClassName(), selects an element by the class name "blah"
            {
            //     const blah = document.getElementsByClassName("blah");
            }

            // .getElementById(), selects an element by the id name "idBlah"
            {
                // const idBlah = document.getElementById("idBlah");
            }
        }
        //Newer Methods
        {
            // querySelector(), able to query the document for either class or ids by "." "#", or if no prefix given you query an element 
            {
                // let blah = document.querySelector("#blah")
                // console.log(blah);
            }

            // .querySelectorAll(), 
            {
                // let tenLi = document.querySelectorAll(".item");
                // console.log(tenLi);
            }

            // TRY IT OUT
            {
                function domQuerying (queryStr){
                    console.log(document.querySelector(queryStr))
                    
                }
                domQuerying("body");

            }
        }

    }

    // Listening for Events
    {
        // Event Listeners
        {
            // const header = document.querySelector("#header");
            // console.log(header);

            // // Click
            // header.addEventListener(
            //     "click", 
            //     event => {
            //         // console.log(event);
            //         header.style.color = "dodgerBlue";
            //         header.style.backgroundColor = "#34ff32"
            //     });
            
            // // Keydown
            // document.addEventListener(
            //     "keydown", 
            //     event => {
            //         console.log(event);

            //         if(event.key === "Enter"){
            //             alert("You hit the enter key");
            //         }
            //         header.style.color = "tomato";
            //     }); 
        }

        // TRY IT OUT
        {
            // const btnTest = document.querySelector("#btnTest");
            // const btnHeader = document.querySelector("#btnHeader");

            // btnTest.addEventListener(
            //     "click", 
            //     event => {
            //         console.log(event);
            //         alert("CLICKED");
            //         window.location.assign("https://jakeaguilar.com/");
            //     }); 

            // btnTest.addEventListener(
            //     "mouseover", 
            //     event => {
            //         console.log(event);
            //         btnTest.style.backgroundColor = "#34ff32"
            //     }); 

            // btnTest.addEventListener(
            //     "mouseleave", 
            //     event => {
            //         console.log(event);
            //         btnTest.style.backgroundColor = "#fff"
            //     }); 

            // document.addEventListener(
            //     "keyup", 
            //     event => {
            //         console.log(event);
            //         btnHeader.style.backgroundColor = "red"
            //     }); 
    
        }

        //querySelector All for multiple buttons
        let buttons = document.querySelectorAll("button");

        // for(let button of buttons){
        //     button.addEventListener(
        //         "click",
        //         () => alert("YOU CLICKED ME"));
        // }

        buttons.forEach(button => button.addEventListener("click", () => alert("YOU CLICK ME AGAIN")));
    }







}