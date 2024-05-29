//firstly we try on var because hosting is supported by var.

var myName = "Namit";
console.log(myName);
var myName = "yadav";
console.log(myName);

// let we try on let variable

let myName1 = "Namit";
console.log(myName1);
// let myName1 = "yadav";
// console.log(myName1);

// but we will do this in let

myName1 = "yadav";

 let myName = "Chris";
  let myName = "Bob";
// As one input: SyntaxError: Identifier 'myName' has already been declared

 let myName = "Chris";
 let myName = "Bob";
// As two inputs: both succeed