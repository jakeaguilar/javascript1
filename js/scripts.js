// // Name Variables
// const firstName = "Jacob";
// const lastName = "Aguilar";

// //Class Desires variable
// var classDesires = "CLASS DESIRES: So this is the second go around of taking JS1, I intially took it back in July of this year. However, during the second half of class, i was not able to focus on learning as much as i needed to in order to complete my final project. So after that, i decided go back and take Websites for beginners and Mobile Friendly websites. MY overall goal for this class is to jumpstart my javascript learning so that i can get into the cohort at Bitwise.";
// //Favorite Hobby variable
// var favHobby = "FAVORITE HOBBY: While I do enjoy learning about software in general, i also LOVE to build PCs. In fact, i believe it is what really got me into technology in the first place. I remember having a friend help build my very first PC years ago, and now i love helping others build their PCs, whether it be a simple desktop for productivity, to balls to the wall gaming or workstation PCs. And when im not building pcs im hanging with friends and drinking alcohol.";

// console.log(firstName, lastName);
// console.log(classDesires);
// console.log(favHobby);

function myBio(){
    // Name Variables
    const firstName = "Jacob";
    const lastName = "Aguilar";
    const nickName = "JLo";

    //Class Desires variable
    var classDesires = "CLASS DESIRES: So this is the second go around of taking JS1, I intially took it back in July of this year. However, during the second half of class, i was not able to focus on learning as much as i needed to in order to complete my final project. So after that, i decided go back and take Websites for beginners and Mobile Friendly websites. MY overall goal for this class is to jumpstart my javascript learning so that i can get into the cohort at Bitwise.\n";
    //Favorite Hobby variable
    var favHobby = "FAVORITE HOBBY: While I do enjoy learning about software in general, i also LOVE to build PCs. In fact, i believe it is what really got me into technology in the first place. I remember having a friend help build my very first PC years ago, and now i love helping others build their PCs, whether it be a simple desktop for productivity, to balls to the wall gaming or workstation PCs. And when im not building pcs im hanging with friends and drinking alcohol.";
    
    var bio = ` Name: ${firstName} ${lastName}\n\n Nickname: ${nickName}\n\n ${classDesires}\n ${favHobby}`;
    console.log(bio);
    alert(bio);

    // console.log(firstName, lastName);
    // console.log(classDesires);
    // console.log(favHobby);
}
myBio();