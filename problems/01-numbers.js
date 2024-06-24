/*
Let's practice playing with number expressions and arithmetic operators in
JavaScript!
*/

let num1 = 2;
let num2 = 5;
let num3 = 7;
let num4 = 10;

// 1. Set the value of expression1 to num2 plus num1.

let expression1;

expression1 = num2 + num1; 

console.log(expression1); //=> 7

// 2. Set the value of expression2 to num4 divided by num2.

let expression2;

expression2 = num4 / num2;

console.log(expression2); //=> 2

// 3. Set the value of expression3 to the remainder of num3
//    divided by num2.

let expression3;

expression3 = num3 % num2;

console.log(expression3); //=> 2 

//Note: This is 1.4 atm need to look back how to make this round up.
//Answer Silly goat you need to use % for the remainder

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let expression4 = num1 + 9 * (12 - num2);

// 2 + 9 * (12 - 5) 
// 2 + 9 * (7)
// 2 + 63 = 65

let predictExpression4;

predictExpression4 = 65; 

console.log(predictExpression4);

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression4 will evaluate to.
let num5 = 14;
let expression5 = num5++;

let predictExpression5;

predictExpression5 = 14;

//for all honesty I thought it would be 15 after looking at this it should be 14 

console.log(predictExpression5);

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let num6 = 22;
num6--;
let expression6 = num6;

let predictExpression6;

predictExpression6 = 21;

console.log(predictExpression6);

// 7. Predict what the value of expression7 will be when printed
//    to the console. Set predictExpression7 to the value that
//    you think expression6 will evaluate to.
let expression7 = (num4 % 6) * num1 - 3;
// (10 % 6) * 2 - 3

let predictExpression7;

predictExpression7 = 5;

console.log(predictExpression7);

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  num1,
  num2,
  num3,
  num4,
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  expression7,
  predictExpression4,
  predictExpression5,
  predictExpression6,
  predictExpression7,
};
