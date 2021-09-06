/*
Objects are data structures used to store related data represented with keys and associated values. Keys are also referred to as properties. Keys give us an easy way to reference the values, so they are almost always descriptive strings. Values can be any valid data type: a number, string, array, even other objects that contain even more objects!

We can iterate through an object's properties in much the same way we iterate through the elements of an array, though the implementation is a bit different. Research for... in and Object.keys before continuing with these challenges.

Challenge
You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.
*/

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5, //var
    randomNum: 18
  };
  // counter
  let found = 0;
  // ADD CODE HERE
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in 

//   for (variable in object)
// {
//     do this
// }
// where a variable - A different property name is assigned to variable on each iteration. & a object - Object whose non-Symbol enumerable properties are iterated over.


  for (const foundNum in checkObj) {
    // console.log(`${foundNum}: ${checkObj[foundNum]}`);
    found =1;
  }