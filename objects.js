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

/*   Challenge: Objects - Iterating with for... in
You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2. */

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  
    for(var i in checkObj){
      if(checkObj[i]>=2){
          objToArray.push(checkObj[i]);
    }
  }
  console.log(objToArray);


  /* Challenge: Objects - Iterating with a for loop
This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.
  */

  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  
  let objToArray = Object.values(checkObj);
  
  for (var i=0; i<objToArray.length;i++)
  {
  if( (objToArray[i]) % 6 == 0){
    divBy6 =true;
  }
  }
  console.log(objToArray, divBy6);
  

  /* Challenge: Objects - Nested Arrays
You are provided with an empty array called nestedArr. Using a for loop starting at index 0, add 5 subarrays to nestedArr, with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, and the index as its second element.

Example of a subarray: ['loop3', 3].*/

const nestedArr = [];
// ADD CODE HERE
for (var i=0;i<5;i++){
  nestedArr[i] = ["loop" + [i], i];
}

console.log(nestedArr);

/*Challenge: Objects - Adding Properties
You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.*/



/* ---
Challenge: Objects - Evaluating Keys
You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total. */

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };

  var x = (Object.values(sumMe));
  
  let total = 0;

for (var i in x){
    if(typeof(x[i]) == "number") {
      total += x[i];
    }
  }console.log(total);

// Simply using a for loop:
/*
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
console.log(typeof(Object.values(sumMe[2])))
var x = (Object.values(sumMe));

let total = 0;
ADD CODE HERE
        console.log(total);
for (var i=0; i<x.length ;i++){
  typeof(Object.values(sumMe)[i]) !== "string"
  (typeof(Object.values(sumMe)[i]) === "number")
  if(typeof(x[i]) == "number") {
    total += x[i];
  }
}
      console.log(total);
*/
