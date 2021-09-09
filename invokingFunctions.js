/*Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.
*/

//Ash's right way of doing this exercise: so there is no dependence of whats passed to the global variable as input by the user!
let calls = "";

function jerry(str) {
	str = "Jerry" ;
  return kramer(str) ;
}

function george(str) {
	str = str + "George" ;
  return elaine(str) ;
}

function elaine(str) {
	str = str + "Elaine" ;
  return str ;
}

function kramer(str) {
	str = str + "Kramer" ;
  return george(str) ;
}


// Uncomment these to check your work!
calls = jerry("");
console.log(calls); // should log: 'JerryKramerGeorgeElaine'

// this is when my solution will fail....
let calls = "";

function jerry(str) {
calls="Jerry";
  kramer();
  george();
  elaine();
  return calls;
}

function george(str) {
calls +="George";
}

function elaine(str) {
calls +="Elaine";
}

function kramer(str) {
calls +="Kramer";
}


// Uncomment these to check your work!
calls = jerry("");
console.log(calls); // should log: 'JerryKramerGeorgeElaine'


/* working solution
let calls = "";

function jerry(str) {
calls="Jerry";
  kramer();
  george();
  elaine();
  return calls;
}

function george(str) {
calls +="George";
}

function elaine(str) {
calls +="Elaine";
}

function kramer(str) {
calls +="Kramer";
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine' */