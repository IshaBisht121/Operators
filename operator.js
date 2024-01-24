// Operators= is used to perform  oprations between two  two operend .

// /Assignmenet Operator= this operator is used to assign the value..

let a = 4;
let b = 6; //assignment operator
console.log(a + b);

// Arithmetic operators example

// Addition
let sum = 5 + 3; // sum is now 8

// Subtraction
let difference = 10 - 4; // difference is now 6

// Multiplication
let product = 2 * 6; // product is now 12

// Division
let quotient = 16 / 4; // quotient is now 4

// Modulus (remainder)
let remainder = 17 % 3; // remainder is now 2

// Increment
let counter = 5;
counter++; // Increment by 1, counter is now 6

// Decrement
counter--; // Decrement by 1, counter is now 5 again

// Comparison Operators:

{
  let x = 5;
  let y = 10;

  // Equal to
  console.log(x == y);

  // Not equal to
  console.log(x != y);

  // Greater than
  console.log(x > y);

  // Less than
  console.log(x < y);

  // Greater than or equal to
  console.log(x >= y);

  // Less than or equal to
  console.log(x <= y); //
}

// Assignment Operators:
{
  let a = 5;
  let b = 10;

  // Perform operations and update variables
  a = a + b;
  console.log("a = " + a);

  // Update another variable
  b *= 2;
  console.log("b = " + b);

  // String concatenation with assignment
  let message = "Hello";
  message += ", World!";
  console.log(message);
}
// Unary Operators:

let count = 5;
count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// Typeof operator
let text = "Hello";
let typeOfText = typeof text;
console.log("Type of text:", typeOfText);

//comparision operator in javascript=this type of operator is used to compare value

// equal operator
console.log(2 == 2);
console.log(2 == "2");

// // not equal operator
console.log(3 != 2);
console.log("hello" != "Hello");

// // strict equal operator
console.log(2 === 2);
console.log(2 === "2");

// // strict not equal operator
console.log(2 !== "2");
console.log(2 !== 2);

//logical operator

const x = 5,
  y = 3;
x < 6 && y < 5;

// // logical AND
console.log(true && true);
console.log(true && false);

// // logical OR
console.log(true || false);

// // logical NOT
console.log(!true);

// concatenation operator
console.log("hello" + "world");
