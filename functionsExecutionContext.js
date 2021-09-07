// https://csx.codesmith.io/units/functions-execution-context/intro-functions-execution-context

// what happens when js runs/executes my code? 
// javascript parses through your code line by line (since js is single threaded / synchronous in order!) and
// checks what to store stuff in (global) memory meaning whats a variable 
// this is whats called thread of execution! 
/* (1) num :3
(2) multiplyBy2 : function
(3)name :"Will" (Note the reason why result isnt created is since the function isn't called here! )
*/

const num=3;
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}
const name ="Will";

//as opposed to here :
/* (1) num :3
(2) multiplyBy2 : function
(3) result: undefined;
(4) name :"Will" 
*/
const num=3;
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}
const name ="Will";
multiplyBy2(3);

//as opposed to here :
/* (1) num :3
(2) multiplyBy2 : function
(3) name :"Will" 
(4) output: undefined (since this calls the function, a local scope is created! )
(5) result: undefined 
(6) inputnumber: argument (4) ;result: 8; output:8 
(7) newOutput: undefined
(8) new local execution context for the function called with a new argument similar to the previous lines
*/


const num=3;
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}
const name ="Will";
const output = multiplyBy2(3);
const newOutput = multiplyBy2(10);

//Call Stack : concept used by js to know where in the execution context it was and needs to return to/from! This
// global execution stack is always the first starting point!
// in this we have multiplyby2 as the second context that pushes in and pops off after execution! 

