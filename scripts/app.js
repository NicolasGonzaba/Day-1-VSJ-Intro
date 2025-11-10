//Comments in JS is 2 forward slashes

//alert("JS IS WORKING!")

console.log("This is a message from the app.js");

//This is how we would declare a variable in C#
//We Know tha C# is a strict programming language
//string myName="karla";

//JS is a loosley typed programming language
//we use the let prefix to declare variables when we would need to change variable later
let myString="ken";
let anotherString="Martinez";
let myInt=4;
let myBool=true;
let myNull=null;

myString="Karla"
console.log(myString)

//use const to prevent reassignment of the variable
const pi=3.14;
//pi=4;

console.log(myInt+pi);
console.log(myString+myInt);

console.log(myString+" "+anotherString)
console.log( `FullNam: ${myString} ${anotherString}`);

let myArray=[1,2,3,4,"five", true]
console.log(myArray)

let myElement=document.getElementById("myElement");
console.log(myElement);
myElement.textContent="I Changed the text from JS!";

//This is a comment in the JS on Nico's branch