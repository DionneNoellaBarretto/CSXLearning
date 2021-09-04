// Exercise Link: https://csx.codesmith.io/units/recursion/parameters-as-storage
// When using global variables
// let counter = 0;
// function recurse() {
//     if (counter ===2) return 'done';
//     counter++;
//     return recurse();
// }

// const output = recurse();
// console.log(output);

// When using parameter as opposed to global variable
// function recurse(counter) {
//     if (counter === 2) return 'done';
//     var newCounter = counter+1;
//     return recurse(newCounter);
//     }
    
// const output = recurse(0);
// console.log(output);

//Using ES6 syntax, counter can be initialized at parameter passing stage!
function recurse(counter =0) {
    if (counter === 2) return 'done';
    var newCounter = counter+1;
    return recurse(newCounter);
    }
    
const output = recurse();
console.log(output);