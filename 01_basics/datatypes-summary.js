//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const symId = Symbol('123')
const anotherId = Symbol('123')

// console.log(symId === anotherId);

// const bigNumber = 3456543576654356754n



// datatypes ouputs //
/*
console.log("data type of score is : "+ typeof score);
console.log("data type of score value is : "+ typeof scoreValue);
console.log("data type of isLogged is : "+ typeof isLoggedIn);
console.log("data type of temperature is : "+ typeof outsideTemp);
console.log("data type of email is : "+ typeof userEmail);
console.log("data type of symbolid is : "+ typeof symId);
console.log("data type of anothereid is : "+ typeof anotherId);
 */



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

//functions

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack & Heap Memory

/*
    => Stacked memory gives the copy of original value. when we make changes we are playing with copy of it actually.
    example 
    let firstName="ahmad"
    let secondName ="nabees"

    let combined = firstName + secondName

    firstName = "waseem"
    secondName = "farooq"

    let combined2 = firstName + secondName

    console.log(combined);
    console.log(combined2); 



    => Heap memory gives the reference of original value when we change the value actual values gets changed.
    Example 
    let studentOne={
    name:"waseem",
    course: "BCA"
    }
    let studentTwo=studentOne
    studentTwo.course =" MCA"  // here we changed the value actual value is changed.

    console.log("Student 1 course "+studentOne.course);
    console.log("Student 2 course "+studentTwo.course);
*/



