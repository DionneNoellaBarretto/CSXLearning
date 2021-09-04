/*
Create a variable birthYear and set it equal to the year of your birth.

Next, create a variable named age and set the value to your current age.

Finally, create a variable named in10Yrs and set the value to equal your age plus 10.

Exercise Link: https://csx.codesmith.io/units/precourse/challenge-numbers-addition-subtraction
*/

// ADD CODE BELOW
let birthYear = 2000;
let age =20;
let in10Yrs = age+10;

// Uncomment these to check your work!
console.log(birthYear);
console.log(age);
console.log(in10Yrs);


/* Numbers can also be multiplied and divided using the multiplication (*) and division (/) operators.

console.log(6 * 5); // => 30
console.log(45 / 5); // => 9
Challenge
Perform the following multiplication/division operations in the code editor:

1. Multiply 20 by 4 and save the result to a variable called twentyTimesFour

2. Divide 9 by 3 and save the result to a variable called nineOverThree

3. Multiply 200.3 * 3 and save the result to a variable called twoHundredTimesThree

Floats
Any number with the decimal point is a float. Notice that in the last exercise you multiplied 200.3 by 3 and the output from that was 600.9000000000001. What happened here? Why didn't we get 600.9?

The way floats are handled in JavaScript can cause these rounding errors. Some decimal numbers cannot be represented accurately. The reason has to do with how numbers are encoded in JavaScript. It's something to be aware of when working with decimal numbers in JavaScript.

If you'd like to read more into the intricacies of float, click here. */

// ADD CODE BELOW

let twentyTimesFour = 20 *4;
let nineOverThree = 9/3;
let twoHundredTimesThree = 200.3*3;

// Uncomment these to check your work!
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);

/*
Two other really useful arithmetic operators we have access to in Javascript are the exponentiation operator (**) and the modulus (remainder) operator (%).

The exponentiation operator (**) raises the first number to the power of the second number.

2 ** 2 = 4
2 ** 3 = 8
2 ** 4 = 16
4 ** 4 = 256
The modulus (remainder) operator (%) returns the remainder of dividing the first number by the second number.

4 % 2 = 0
4 % 3 = 1

4 % 5 = 4
In the first example, we get 0 because 2 divides evenly into 4, so there isn't a remainder. In the second, we have a result of 1 since 3 goes into 4 one time and then leaves us with a remainer of 1. The last example may seem a little tricky, but think of of it like this: 5 is larger than 4, so technically it can't go into 4 at all, so the remainder would be 4.

Maybe you're asking yourself why would you need to use this? Well one common use is determining whether a number is even or odd. Since we know that even numbers are divisible by 2, then we can then say that if the remainder of dividing any number by 2 = 0, then it is an even number. Likewise, if the remainder is 1, then it is odd.

45 % 2 = 1 (45 is odd)
36 % 2 = 0 (36 is even)
Challenge
Now we're gonna take the training wheels off a bit now. This time you're going to have to write your own tests! Utilize the space below line 8 to write any console.log statements that you'd like to use to test your answers.

1. Declare a constant fiveSquared and assign it the value of 5 to the power of 2 using the exponentiation operator.

2. Declare a constant eightCubed and assign it the value of 8 to the power of 3 using the exponentiation operator.

3. Declare a constant sevenToTheSixth and assign it the value of 7 to the power of 6 using the exponentiation operator.

4. Declare a constant eightyThreeModSix and assign it remainder of dividing 83 by 6.

5. Declare a constant sixtyModNine and assign it the remainder of dividing 60 by 9.
*/

// ADD CODE BELOW

const fiveSquared = 5**2;
const eightCubed = 8**3;
const sevenToTheSixth = 7**6;
const eightyThreeModSix = 83%6;
const sixtyModNine = 60%9;




// ADD CONSOLE LOGS BELOW

console.log(fiveSquared);
console.log(eightCubed);
console.log(sevenToTheSixth);
console.log(eightyThreeModSix);
console.log(sixtyModNine);

/*
Incrementor / Decrementor
As programmers, we are constantly updating data. By now you're probably getting pretty familiar with how to reassign the value of a variable, but here's an example to refresh your memory.

let num = 7;

num = num + 1;
console.log(num); // => 8
Notice how we use the syntax num = num + 1 to change the value of num. Wouldn't it be nice if we didn't have to type our variable name in twice? Luckily, in JavaScript, we have some really useful built-in operators to help us handle this redundancy. The first 2 we are going to cover are the incrementor (++) and the decrementor (--). Take a look at the example below:

let num = 10;

num++
console.log(num) // => 11
In the above example, just by using num++ we were able to increment the value of num by 1. Likewise, if we wanted to decrement the value by one, we could use num--. These operators are extremely useful, and you'll be using them quite a lot in Precourse - Part 2 when we dive into loops.

Challenge
1. Using the incrementor operator, increase the value of num1 by 1.

2. Using the decrementor operator, decrease the value of num2 by 1.
*/

let num1 = 32;
let num2 = 44;

// ADD CODE BELOW HERE

console.log (num1++);
console.log(num2--);

/*
Assignment Operator
What if we wanted to increase our value by more than 1 though? Luckily, there's an operator for that as well! We call this an assignment operator.

let num = 5;

num += 10
console.log(num) // => 15
Here, we have the syntax of num += 10. This is the same thing as typing num = num + 10. By using the addition assignment operator (+=) we are able to add 10 to num similarly to how we did above with the incrementor/decrementor.

The best part, is we aren't just limited to addition with the assignment operator. Each arithmetic operator has its own assignment operator:

+= - addition
-= - subtraction
*= - multiplication
/= - division
Challenge
1. Using the appropriate assignment operator, reassign the value of num1 to the current value plus 17.

2. Using the appropriate assignment operator, reassign the value of num2 to the current value minus 14.

3. Using the appropriate assignment operator, reassign the value of num3 to the current value times 11.

4. Using the appropriate assignment operator, reassign the value of num4 to the current value divided by 8.

Utilize the console to test your code before you submit it!
*/

let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

// ADD CODE BELOW HERE

console.log(num1 +=17);
console.log(num2 -=14);
console.log(num3 *=11);
console.log(num4 /=8);

/*
Boolean (BOO-lee-uhn) is another data type in JavaScript. JavaScript boolean values can be either true or false. They are useful for determining whether or not blocks of code should be executed. They are also the default result for many evaluations.

let likesJavaScript = true;
let likesMath = false;

const numToCheck = 10;
console.log(numToCheck === 10) // => true
In the example above, we're using the === operator (we'll talk about this in more detail in the next challenge) to compare numToCheck with 10 and determine if they are equal. If they are equal, both in value and data type, then JavaScript will log true. Otherwise, it will log false.

Booleans are extremely handy when dealing with conditional statements - you'll learn more about them in a later section.

Challenge
1. Below line 3, reassign the value of iHaveChanged to true.

2. Declare a variable iLoveCoding and assign it a boolean value of true.

3. Declare a variable codingIsTooHard and assign it the boolean value of false.
*/

let iHaveChanged = false;

// ADD CODE BELOW
console.log(iHaveChanged = true);
let iLoveCoding = true;
console.log(iLoveCoding);
let codingIsTooHard = false;
console.log(codingIsTooHard);

/*
Comparison Operators
In programming, when working with data, we often need to compare different values. To do this, we use a series of operators called comparison operators. Check out this list of the most common comparison operators:

< - Less than
> - Greater than
<= - Less than or equal to
>= - Greater than or equal to
== - Is loosely equal to
=== - Is strictly equal to
!= - Is not loosely equal to
!== - Is not strictly equal to
The first four are probably pretty familiar to you from primary school math class, but things start to get a little tricky when we talk about equality in JavaScript.

First, we already know that a single equals sign (=) is used to assign value to a variable, so we can't use that to compare to values unfortunately.

So let's start with loose equality (==). This operator is used to compare if 2 values have the same value, even if they aren't necessarily the same type.

 1   ==  1        // true
"1"  ==  1        // true
 1   == '1'       // true

true == true      // true
true == 'true'    // false
In the example above, all of these comparisons are true, because the value is the same even though they may have a different data type.

For 2 values to be strictly equal (===) to each other, they need to not only have the same value, but also must have the same data type:

 2   ===  2        // true
"2"  ===  2        // false
 2   === '2'       // false

true === true      // true
true === 'true'    // false
Don't worry if this still seems a little confusing. We'll come back to it a bit more when we get to conditional statements in the second half of the precourse.

Challenge
For the following problems, you will be using the comparison operators (==, ===, <, >, <=, >=) to compare two variables and see if the comparison yields true or false. You will assign the resulting boolean to a variable. For example:

let first = 7;
let second = 8;

let isFirstBigger = first > second;
console.log(isFirstBigger); // should log: false

first = 16;
console.log(isFirstBigger); // should log: true
1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.

3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.

Continue to experiment with different comparison operators and data types. You can see a full list of comparison operators here.*/

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)

let isSmaller = small < large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)

let isLooselyEqual = (num == string);
let isStrictlyEqual = (num === string);

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)

let isTrueNotFalse = (isTrue!==isFalse);

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);

/*
Look at the console.log statements for this challenge. What do you think will be logged to the console? When you have an idea, uncomment and run the code.

What happened?

console.log(10 + 5); // 15
console.log("10" + 5); // 105
The first statement adds the numbers as expected. But in the second statement, '105' is logged to the console. Notice the quotation marks wrapped around the number 10 in the console.log statement; this means that the value is a string. There are no quotation marks around the number 5.

What happened is type coercion, an important concept in JavaScript. We can't add a string value and a number value together; instead, JavaScript "coerces" (changes) the number into a string and treats the + operator as an instruction to concatenate strings.

console.log("10" + "5"); // 105
console.log("10" + 5); // 105
Challenge
Uncomment the code and see what happens. Then, try it out yourself and make sure you really understand the concept.*/
console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");


/*
Quite often in programming, we need to be able to look up what the specific data type of a given operand is. In JavaScript, the typeof operator returns the data type of its operand in the form of a string. Operand can be any object, function or variable.

typeof("testing")   // => "string"
typeof(22)         // => "number"
typeof(false)      // => "boolean"
Keep in mind that the typeof an array is an object.

Challenge
1. Declare a variable favMovieType. Then, using the typeof operator, assign it the value of favMovie's data type.

2. Declare a variable timesSeenType. Then, using the typeof operator, assign it the value of timesSeen's data type.

3. Declare a variable seeAgainType. Then, using the typeof operator, assign it the value of goingToWatchItAgain's data type.*/

const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
let favMovieType = typeof(favMovie);
let timesSeenType = typeof(timesSeen);
let seeAgainType = typeof(goingToWatchItAgain);

console.log(favMovieType);
console.log(timesSeenType);
console.log(seeAgainType);
