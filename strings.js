/*
Strings are a data type in JavaScript. In short, they are bits of text written inside of quotation marks. You can use either single quotes ('), double quotes ("), or backticks (`) as quotation marks to wrap a string, as long as the opening and closing symbols match. They are particularly useful for any data or value that can be represented as plain text.

Uncomment the text on lines 2 through 4 to see examples of strings.

Challenge
1. On line 7, declare a variable mySingleString with single quotes ('), and set it's value to any string you like.

2. On line 8, declare a variable myDoubleString with double quotes ("'), and set it's value to any string you like.

3. On line 9, declare a variable myBackString with backticks (`), and set it's value to any string you like.

Hint: For now, only use plain text without any special characters or contractions. We'll go into why these may cause you trouble in next challenge.
*/

// Uncomment the lines below to see examples of strings
// console.log('A string can be written inside of single quotes.');
// console.log("It can also be written inside of double quotes.");
// console.log(`Backticks work, too.`);

// ADD CODE BELOW
const mySingleString = 'A string can be written inside of single quotes.';
const myDoubleString = "It can also be written inside of double quotes.";
const myBackString =`Backticks work, too.`;



// Uncomment the line below to check your work!
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);

/*
What if you wanted to put a contraction inside of a string? For example, take a look at the folowing code block.

const myString = 'Why doesn't this work';
// => SyntaxError: Unexpected identifier
Looks like the string is getting closed out by our (') in doesn't. Hmmmmm...what to do, what to do! Luckily JavaScript has this figured out for us! Take a look at this example:

const myString = 'Why doesn\'t this work';
console.log(myString) // => 'Why doesn't this work?'
Notice how when we put the (\) in front of the (') it didn't end our string? This is called escaping the character. Anytime JavaScript sees a (\) inside of a string, it knows that the following character has a special meaning. Here is a list of some of the most common escape sequences:

\' => single quote
\" => double quote
\\ => backslash
\n => newline
\r => carriage return
\t => tab
\b => backspace
\f => form feed
Notice that even a backslash itself has to be escaped in order to display inside a string as well. Now let's see what you can do!

1. Uncomment out lines 1 & 2. Hit the Run Code button. Notice how we are missing all those backslashes? Add the appropriate \'s so that the path prints to the console with the proper \'s where they belong.

2. Uncomment out lines 4 & 5. Hit the Run Code button. Uh Oh! We've got an error! Fix the heSaid string so that it doesn't throw and error and prints to the console properly.

3. Uncomment out lines 7 & 8. Hit the Run Code button. Uh Oh! Another error! Fix the sheSaid string so that it doesn't throw and error and prints to the console properly.
*/

const path = "C:\\Users\\Win\\Files\\javascript.js";
console.log(path);

const heSaid = "He said, \"Hey Foo!\"";
console.log(heSaid);

const sheSaid = 'My name ain\'t Foo!';
console.log(sheSaid);



/* Challenge: String Concatenation
In this exercise we will explore string concatenation. String concatenation is joining strings together. You've already seen an example in a previous exercise, which uses the + operator to concatenate strings.

console.log("Hi, " + firstName);
Challenge
Use string concatenation to join the three provided strings (first, second, and third) and assign the resulting string to a variable called welcomeStatement. The value of welcomeStatement should be 'Welcome to the jungle!'*/

const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW

let welcomeStatement = first + ' ' + second + ' ' + third;

// Uncomment the line below to check your work!
console.log(welcomeStatement);


/* ES6 & Template Literal
ECMAScript is a standardized version of JavaScript meant to unify the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the terms JavaScript and ECMAScript are interchangeable. ECMAScript 6 (ES6), released in 2015, brought about many new features to JavaScript which we will be exploring throughout this course. In this lesson we will focus on the template literal.

Template literals are a special type of string that make creating complex strings so much easier. Template literals are created by surrounding text between opening and closing backticks (``). Inside a template literal, you're able to refer to variables or execute code by using ${}. Take a look at the following example:

console.log(`10 + 25 = ${10 + 25}`) // => "10 + 25 = 35"
By wrapping the calculation 10 + 25 in the ${}, we are able to calculate the total right there inside of the string. We can also refer to specific variables in a template literal as well:

const firstName = 'Kyle';
const greeting = `Hi, ${firstName}!`;
console.log(greeting); // => "Hi, Kyle!"
Template literals also remove the need for escaped characters and string concatenation in many case as well. If you hit return, tab, etc inside of a template it will format the string in that form for you! You can also inject multiple variables into the same string.

const firstName = 'David';
const lastName = 'Bowie';
console.log(`My favorite artist is ${firstName} ${lastName}`) 
=> "My favorite artist is David Bowie"
Challenge
Declare 2 variables x & y, and set their values to any number you like. Next declare a constant solution which is a string that prints to the console like the example below:

let x = 2;
let y = 5;
const solution = <insert your code here>;
console.log(solution) // => "The sum of 2 and 5 is 7"
Hint: Don't forget the backticks (``)!*/

let x= 2;
let y=5;
const solution = `The sum of ${x} and ${y} is ${(x + y).toString()}`;
console.log(solution);

