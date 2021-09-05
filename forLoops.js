/*Iteration Statements or Loops will allow you to write a block of code once, and repeat the execution of the code for a given number of times. There are a few different kinds of iteration statements in Javascript - but for now we'll cover only the most basic one: a for loop.

for (let i = 0; i < 10; i++) {
  // code to be repeated goes here
}
There are a few things going on here so let’s break this down. First off, we’re using the for keyword to tell JavaScript that we want to run a loop. Immediately after the for keyword, we’ll enclose a few conditions for the loop inside of a set of parentheses, separated by semicolons. for loops accept three conditions:

1. Initial Expression — this is simply a place for you to initialize any JavaScript expression (an expression is a bit of JavaScript code that evaluates to a single value). Most often, it’s used to declare a variable, in this case i, that will be used as a counter for how many times the loop iterates. You should definitely follow this pattern until you’re comfortable enough to try a more complex expression.

2. Conditional Expression — this should be a JavaScript expression that will evaluate to a true or false. In the example above, since i , which is currently set to 0 is indeed less than 10 , this will evaluate to true and execute the block of code inside of the curly braces {}. This condition is checked every time the loop runs, just before the code is executed. If this condition ever evaluates to false, the loop will stop and JavaScript will move on with executing code below it.

3. Increment Expression — this should be an expression that increments your loop counter as the loop runs. It will be executed after the code inside of the loop block is run. In the example above, i++ is shorthand for increasing the value of i by 1.

Finally, once you’ve declared your loop conditions, you can insert the code that you want to be repeated inside of the curly braces {}. Again this code will be executed until your condition (#2 above) evaluates to false.

Looping through Arrays
Now that we know how to write a loop, let's talk about how to loop through an array.

Remember, a value in an array can be accessed using the index of its position in the array: myArray[0]. With this in mind, we can utilize our loop counter, i to access each successive element in an array as the loop runs. Let's take a look at an example:

const myArray = ['string1', 'string2', 'string3'];

for (let i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}
Let's break this down a bit. We've declared a variable myArray and have assigned it a value of an array containing a few strings.

Next, we've declared a for loop that will run as long as i is less than the length of the array (remember, we're incrementing i by 1 each time the loop runs). Now, since both the array's indexes and i start at 0 and increment by 1, we can effectively use i to lookup the elements in the array in order, where i will correspond to an index in the array.

Now that the idea of using i as an index has been established, inside of our loops code block we can reference the current element of an array like so: myArray[i].

Challenge
Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.*/

let countDown = 10;

// ADD CODE HERE
for (var i=countDown; i>=1;i--)
  {
    countDown =countDown -1;
  }
// Uncomment the below line to check your work

console.log(countDown); // -> should print 0;


/*Challenge: For Loops and Arrays
1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

2. Use a second for loop to iterate through the greetings and console.log() each greetings.
*/

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

for (var i =0; i<synonyms.length;i++) {
  greetings.push(`Have a ${synonyms[i]} day!`);
  console.log(greetings);
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (var i=0; i<greetings.length;i++){
  console.log(greetings[i]);
}

/*You are given 3 different arrays, one of first names, last names and places. Imagine that each array element at a certain index corresponds to one user.

For example, my friends are Mary Snow, Kris Bowles, and Janelle Wong. I have two arrays, one of first names and one of last names. In order to get the full name of my friend, I need to access both arrays

const firstNames = ["Mary", "Kris", "Janelle"];
const lastNames = ["Snow", "Bowles", "Wong"];

console.log(firstNames[1]) // returns Kris
console.log(lastNames[1]) // returns Bowles
For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.*/

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (var i=0; i <firstNames.length;i++) {
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}

console.log(bios);

/*
Challenge: For Loops - Calculating Array Elements
You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.*/

let increaseByTwo = [1, 2, 3, 4, 5];
const newArray =[];
// ADD CODE HERE
for (var i=0; i<increaseByTwo.length;i++)
{
  newArray.push(increaseByTwo[i]+2);
}
increaseByTwo=newArray;
// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

/* OR 
const increaseByTwo = [1, 2, 3, 4, 5];

ADD CODE HERE
for (var i=0; i<increaseByTwo.length;i++)
{
  increaseByTwo[i]+=2;

}
Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7]; */

