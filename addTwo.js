// Challenge: addTwo
// Create a function addTwo that accepts a number, and returns the number plus 2.

function addTwo(number){
    return (number +2);
  }
  addTwo(10);
  
  // Uncomment these to check your work!
  console.log(typeof addTwo); // should log: 'function'
  console.log(addTwo(10)); // should log: 12


/* Challenge: addS
Create a function addS that accepts a string, and returns the string with an "s" added to the end.*/
  
function addS(string){
    return(string+"s");
  }
  
  // Uncomment these to check your work!
  console.log(typeof addS); // should log: 'function'
  console.log(addS('cat')); // should log: 'cats'

  /*Challenge: sayHello
Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.*/
function sayHello(name){
    return(`Hi, ${name}`);
  }
  
  sayHello();
  
//   Uncomment these to check your work!
  console.log(sayHello('Mary')); // should log: 'Hi, Mary'
  console.log(sayHello('Haley')); // should log: 'Hi, Haley'

/*Challenge: wereAwesome
Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"*/

  function wereAwesome(you, yourBuddy) {
    // ADD CODE HERE
    return(`${yourBuddy} and ${you} are awesome!`);
  }
  
  // Uncomment the lines below to test your function:
  console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
  console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
  console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
  console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"


  /*Challenge: lastLetter
Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]' */

function lastLetter(word) {
    // INSERT CODE HERE
        return(word[word.length-1]);
  }
  
  // Uncomment the lines below to test your code
  console.log(lastLetter("hello")); //=> "o"
  console.log(lastLetter("goodbye!")); //=> "!"
  console.log(lastLetter("ZeltoiD")); //=> "D"
  console.log(lastLetter("I love Javascript")); //=> "t"

  