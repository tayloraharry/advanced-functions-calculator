var numberA = document.getElementById("number-1");
var numberB = document.getElementById("number-2");
var output = document.getElementById("output");

document.querySelector("body").addEventListener("click", function() {

  if (event.target.id === "add") {
    output.value = (parseInt(numberA.value) + parseInt(numberB.value));
  }

  if (event.target.id === "subtract") {
    output.value = (parseInt(numberA.value) - parseInt(numberB.value));
  }

  if (event.target.id === "multiply") {
    output.value = (parseInt(numberA.value) * parseInt(numberB.value));
  }

  if (event.target.id === "divide") {
    output.value = (parseInt(numberA.value) / parseInt(numberB.value));
  }

})


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */