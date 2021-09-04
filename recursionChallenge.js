// Exercise Task: Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.
// Exercise Link: https://csx.codesmith.io/units/recursion/challenge-repeater

// Attempt1: When I first approached this problem I used a for loop and was successful in solving the problem, however I did not use recursion meaning I did not call the repeater function repeatedly in the call stack but rather called it 5 times using a for loop within the first instance of repeater being called in the call stack.

// //where char is the input parameter by a user
// function repeater(char) {  
//     // initializing output with the input value from the user
//       var output =char;
//     //setting this to 4 since the number goes down to 0 meaning we have 5 ( could have done this using the ++ operator option as well 
//       for (var i=4; i>0; i--)
//         {
//     // appending the input char to output placeholder var
//           output +=char;
//         }
//     //returning the output to end the function
//      return output;
//     }
//     // To check if you've completed the challenge, uncomment these console.logs!
//     console.log(repeater('g'));
//     console.log(repeater('j'));


// Attempt2: To fix this logic reattempted the solution with assistance from Ash R

var number = 0
var string = ""
function repeater(char) {  
  if ( number == 5 ){
    var output = string
    string = ""
    number = 0
    return output
  } 
  else {
    string += char[0]
    number += 1
  }

  return repeater(char)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
console.log(repeater('jj'));