// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

//Solution:-
//An arrow function, also known as a fat arrow function, is a concise way to write anonymous functions in JavaScript. It was introduced in ECMAScript 6 (ES6) and provides a shorter syntax compared to traditional function expressions.
// const functionName = (parameters) => {
//   // function body
// };
//Remember:-

//The area of a rectangle can be calculated using the formula:
//Area = Length × Width

const area_function = (l, w) => {
  //here l=length and w=width ,this arrow function takes 2 input parameters
  let area_reactangle = l * w; //performing some operations inside a body.
  console.log(area_reactangle); //log the result
};

//calling a function with given values
area_function(2, 16); //values can be given to a parameters during calling a function.

//Author- HUMA MOHSIN
