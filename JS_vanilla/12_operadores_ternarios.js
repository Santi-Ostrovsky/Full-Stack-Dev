console.log(' \nTERNARY OPERATORS \n')

/* Ternary operators allow to have single-lined if-else statements
by using the question mark '?' symbol.    */

function checkHigher(a, b) {
    return a > b ? a : b;
} /* This reads: return + condition (a higher than b) + ? (if) +
     output if condition is true + colon (: - 'but if not true,
     return...) + output if condition is false.    */

console.log(checkHigher(5, 10));
console.log(checkHigher(100, 2));

// USING MULTIPLE TERNARY OPERATORS
console.log('');

function checkSign(num) {
    return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero'
} /* After each colon ':', a new condition can be set, as if each
     colon ':' was an 'else if' statement, being the last colon ':'
     an 'else' statement.   */

console.log(checkSign(20));
console.log(checkSign(-100));
console.log(checkSign(0));

// -----------------------------------------------------------------

console.log('');

/*
The conditional operator, also called the ternary operator, can be
used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to
run when the condition returns true, and c is the code to run when
the condition returns false.

The following function uses an if/else statement to check a
condition:

>>> function findGreater(a, b) {
>>>   if(a > b) {
>>>     return "a is greater";
>>>   }
>>>   else {
>>>     return "b is greater or equal";
>>>   }
>>> }

This can be re-written using the conditional operator:

>>> function findGreater(a, b) {
>>>   return a > b ? "a is greater" : "b is greater or equal";
>>> }

Use the conditional operator in the checkEqual function to check if
two numbers are equal or not. The function should return either the
string Equal or the string Not Equal:

- checkEqual(1, 2) should return the string Not Equal
- checkEqual(1, 1) should return the string Equal
- checkEqual(1, -1) should return the string Not Equal
*/

function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal';
  }
  
console.log(checkEqual(1, 2));
console.log(checkEqual(1, -1));
console.log(checkEqual(1, 1));

// -----------------------------------------------------------------

console.log('');

/*
The following function uses if, else if, and else statements to
check multiple conditions:

>>> function findGreaterOrEqual(a, b) {
>>>   if (a === b) {
>>>     return "a and b are equal";
>>>   } else if (a > b) {
>>>     return "a is greater";
>>>   } else {
>>>     return "b is greater";
>>>   }
>>> }

The above function can be re-written using multiple conditional
operators:

>>> function findGreaterOrEqual(a, b) {
>>>   return (a === b) ? "a and b are equal" 
>>>     : (a > b) ? "a is greater" 
>>>     : "b is greater";
>>> }

It is considered best practice to format multiple conditional
operators such that each condition is on a separate line, as shown
above. Using multiple conditional operators without proper
indentation may make your code hard to read. For example:

>>> function findGreaterOrEqual(a, b) {
>>>   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
>>> }

In the checkSign function, use multiple conditional operators
- following the recommended format used in findGreaterOrEqual -
to check if a number is positive, negative or zero.
→ The function should return positive, negative or zero.

- checkSign(10) should return the string positive. Note that capitalization matters
- checkSign(-12) should return the string negative. Note that capitalization matters
- checkSign(0) should return the string zero. Note that capitalization matters
*/

function checkSign(num) {
    return num == 0 ? 'zero'
      : (num > 0) ? 'positive'
      : 'negative';
}
  
console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));

