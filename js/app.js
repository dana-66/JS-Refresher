// import if the type = module
// import { apiKey } from './util.js';
// importing a default export value
// import varName from './util.js';


// console.log(varName);
// console.log(apiKey);

//importing multiple vars
// import { var1, var2, var3 } from './util.js';

//importing multiple vars as a JS group (object)
// import * as util from './util.js';

// to assign alias
// import { var1, var2 as renaming} from './util.js'; 

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(util);
// console.log(util.var1);
// console.log(renaming);

// Variables and Values can be created when needed
// console.log("Hello World!!!");

// let userMessage = "Why ?? my value can be re-assigned";
// var x = "my value is x";
// const y = "i cannot be re-assigned";

// console.log(userMessage);
// console.log(x);
// console.log(y);

// // Operators
// console.log(6 + 2);
// console.log("text 1 " + " ,Text 2"); //string concatenation
// console.log(6 - 2);
// console.log(6 / 2);
// console.log(6 * 2);
// console.log(6 % 2);
// console.log(6 ^ 2);

// // comparison operators
// console.log(6 === 2); //strictly equal
// console.log(6 > 2);
// console.log(6 < 2);
// console.log(6 >= 2);
// console.log(6 <= 2);
// console.log(6 !== 2);

// // Functions & Parameters
// // declaring the function using function keyword
// function greet(name) {
//      console.log("Hello,",name)
// }
// // invoking the function
// greet("Dan");

// // you can assign a default value to a parameter like this
// function greetings(userName, msg = "Hello!!!") {
//     // console.log(userName);
//     // console.log(msg);
//     return "Hi, iam " +userName +". " +msg;
// }
// greetings("Dan");

// const maxGreetings = greetings("Sam", "how u doin ?");
// console.log(maxGreetings);


// Arrow Functions:
    // - using the function keyword
    // export default function () {
    //     console.log("Hello !");
    // };
    // // arrow syntax
    // const sum = (num1, num2) => {
    //     return num1 +" + " +num2 +" = " +(num1+num2);
    // }
    // console.log(sum(3,2));

    // // okay lets go
    // // arrow syntax
    // const summ = (num1, num2) => {
    //     return num1 +" + " +num2 +" = " +(num1+num2);
    // }
    // console.log(summ(3,2));
    // const mult = (num1, num2) => {
    //     return num1 +" * " +num2 +" = " +(num1*num2);
    // }
    // console.log(mult(3,2));


    // Objects & Classes: 
    // objects : can be used to group multiple values together
    // const user = {
    //     name: "Dan",
    //     age: 22,
    //     greet() {
    //         console.log("Hello!");
    //         console.log(this.age);
    //     }
    // };

    // console.log(user);
    // // to access a value in an objects
    // console.log(user.name);
    // console.log(user.age);
    // // console.log(user.greet());
    // user.greet();

    // // creating a blueprint for an object
    // class User {
    //     // constructor
    //     constructor(name, age) {
    //         // creating properties
    //         this.name = name;
    //         this.age = age;
    //     }   

    //     greet() {
    //         console.log("Hi," ,this.name);
    //     }
    // };

    // // using the class
    // const user1 = new User("Dan", 23);
    // console.log(user1);
    // user1.greet();

    