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

/*
Challenge: String Properties & Methods
Find the Length of a String
All data types in JavaScript come with some built in properties and methods which we can use to extract information or manipulate the data stored inside the variable. We'll dive into this concept more with each new data type we cover, but let's start with some of the more simple things we can do with strings.

What if we wanted to find the length of a string? Wouldn't it be nice if we didn't have to sit and count each character ourselves? Luckily, strings in JavaScript have a built in length property that we can access by adding .length to the end of any string. Take a look at this example:

const myString = "Howdy"
console.log(myString.length) // => 5

console.log("I love JavaScript".length) // => 17
String Methods
JavaScript methods are actions that can be performed on objects. We already know that all data types in JavaScript are inherently objects, but that also means that each data type comes with its own set of built in methods. A method is essentially a property containing a function definition.

Two common string methods are toUpperCase and toLowerCase. We call these methods similarly to our length property, but in the case of methods, we need to add () to the end of the method name. Here is an example:

const favArtist = "David Bowie"

console.log(favArtist.toUpperCase()) // => "DAVID BOWIE"
console.log(favArtist.toLowerCase()) // => "david bowie"
For a list of all the string properties & methods in JavaScript, click here.

Challenge
1. Declare a variable count and set its value equal to the length property of the string variable hometown.

2. Declare a variable upper and set its value equal to the string favAlbum converted to uppercase letters.

3. Declare a variable lower and set its value equal to the string favAlbum converted to lowercase letters.
*/

let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
let count = hometown.length;
let upper = favAlbum.toUpperCase();
let lower = favAlbum.toLowerCase();

// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);

/*
Challenge: Bracket Notation for Strings
Bracket notation is a way to access a specific character in a string. We can do so by simply adding brackets ([]) to the end of our string and placing the index of the character we want to access inbetween those brackets.

What's an index though? The index is the position within the string of the character we want to access. The catch though is that JavaScript, like most modern programming languages, uses a zero-based system for indexing. This means that we start our count at 0 instead of 1. So to access the first character of a string, we would use the index of 0. Take a look at this example:

let favFood = "tacos"
console.log(favFood[0]) // => "t"
console.log(favFood[2]) // => "c"
One thing to keep in mind though is that even though we can access a specific character of a string using the bracket notation, it doesn't mean we can change it. Remember that strings are a primitive data type in JavaScript. One key thing to know about primitive data types is that they are immutable which means they can't be altered. For instance:

let word = "brand";

console.log(word[3]) // => "n";
word[3] = "i";

console.log(word[3]) // => "n";
console.log(word) // => "brand"
Did you think word would change from "brand" to "braid"? Because strings are immutable, if we want to make that change, we would have to reassign the entire value like this:

let word = "brand";

word = "braid"
console.log(word) // => "braid"
Challenge
1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

3. Declare a variable lastLetter and assign it a value of the last letter of lyrics using bracket notation and the .length property we learned in the last challenge.

Hint: Don't forget about that zero-based indexing.
*/
const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
let firstLetter =songTitle[0];
let seventhLetter =songTitle[6];
let lastLetter = lyrics[lyrics.length-1];

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);


