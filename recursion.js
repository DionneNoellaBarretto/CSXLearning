// Exercise Link: https://csx.codesmith.io/units/recursion/intro-recursion

// func calling itself results in a callstack error not a range error since this runs incessantly and runs out of memory for the call stack to execute!
//  RangeError: Maximum call stack size exceeded
// function recursion(){
//     recursion();
// }

// recursion()



// let counter = 0;
// function recursion(){
//     counter++;
//     console.log(counter) 
//     // this goes upto the allowable memory on the system you run before throwing a range error! For Example:
//     // 11287
// // node:internal/console/constructor:293
// // if (isStackOverflowError(e))
// //     ^
// // RangeError: Maximum call stack size exceeded
//     recursion();
// }

// recursion()

// ending the function when a condition is met

let counter = 0;
function recursion(){
    // this will return done when condition is met that is passed on to each return call!
    if (counter ==2) return 'done';
    counter++;
    console.log(counter) 
 return recursion();
}

console.log(recursion());
// Expected output: 
// 1
// 2
// done
// [Done] 