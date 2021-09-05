/*
Arrays are denoted by square brackets [], with each value inside of the array separated by commas like so:

let fellows = ["Brandon", "Sam", "Gordon"];
Notice that the array is a lot like a list. JavaScript uses a zero-based indexing system to keep track of values in the array, starting at 0 for the first array element, 1 for the second array element, and so on. This makes arrays very easy to work with, as you'll see in the next section.

let letters = ['a', 'b', 'c']
The index of 'a' is 0
The index of 'b' is 1
The index of 'c' is 2
What if we need to grab only a single element from our array? We can use the index of that element in the array to select it:

let friends = ['George', 'Thai', 'Brandon'];
console.log(friends[2]); // should log: 'Brandon'
Something that's also very handy is knowing how many elements are in an array at any given time. Arrays come with a built-in length property that tells us how many items are currently in the array.

const myArray = [1, 3, 4, 2];

console.log(myArray.length); // should log 4
We can also add and remove items from our arrays using some additional built-in methods. To add an element to the end of an array, use the push method. To remove items from the end of an array, use the pop method.

let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers); // should log: [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // should log: [1, 2, 3, 4]
Challenge
Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). Then console.log fourthItem to see the output.
*/

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3];

// Write a console.log statement below to check your work!
console.log(fourthItem);

/* Use a built-in JavaScript method to add another show to the netflixShows array. Then log your updated array to the console. */

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("Flintstones");

// Write a console.log statement below to check your work!

console.log(netflixShows);

