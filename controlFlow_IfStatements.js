/*
Sometimes there are certain conditions that need to be met in order for an event to occur. Let's take dating as an example. If going out on a first date is a horrible experience, then there won't be a second date. If the first date is wonderful, then there will probably be a second date. We use this same kind of logic in programming.

Using an if statement, we can execute a block of code if the condition inside the parentheses is met.

if (5 > 2) {
  console.log("Math still works!"); // 'Math still works!'
}
If we wanted to chain more if statements together, we could use an else if block. In the example below, four is not less than two so we don't run the block of code inside the if statement. Next, we move to the else if statement. That condition is true, so the code runs.

if (4 < 2) {
  console.log("This shouldn't log");
} else if (4 > 2) {
  console.log("This should log"); // 'This should log'
}
You can also use an else statement to catch anything that your if and else if conditions don't meet.

let day = "Christmas";
if (day === "work day") {
  console.log("Time to go to work!");
} else if (day === "sick day") {
  console.log("Stay home and rest up!");
} else {
  console.log("Enjoy your holiday!");
}
In the code above we have specific conditions for sick days and work days. However, there are other days that have special conditions. We don't want to write a condition for every holiday; that would take too long. Instead we use an else block to catch those cases.

Challenge
Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.

Learn more about null here.
*/

const num = 40;
let final;
// ADD CODE HERE
if(num>100){
  final =null;
}
else {
  final = num*2;
}

// Log final to the console below to check your work
console.log(final);

/*Challenge: fizzbuzz
Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

Hint: Check out the remainder/modulo operator: %.
*/

const fb = [];
// ADD CODE HERE
    // could also use strict comparison and instead of <=16 say <17 and /or use i-- instead of i++
for (var i=1;i<=16;i++)
{

  if((i%3 ==0) && (i%5==0)){
    fb.push("fizzbuzz");
  }
  else if (i%3 ==0){
    fb.push("fizz");
  }
  else if (i%5 ==0){
    fb.push("buzz");
  }
  else{
    fb.push(i);
  }
}
console.log(fb);

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]


/*
Challenge: Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
*/

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (var i=0; i<timesTenIfOverFive.length;i++){
  if (timesTenIfOverFive[i]>=5) {
    timesTenIfOverFive[i]*=10;
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]