console.log(' \nNUMERIC OPERATIONS \n')

// Increments by 1 are done by entering '++'
a = 2;
a++;
// Now 'a' equals 3
console.log('now \'a\' equals', a);

// Decrements by 1 are done by entering '--'
a--;
// Now 'a' equals 2
console.log('now \'a\' equals', a);

// '+=', '-=', '*=' and '/=' operations work as in Python.
// '+=' can also be used to concatenate strings.

// -----------------------------------------------------------------

console.log(' \nCONVERT STRINGS INTO NUMBERS \n');

/* The parseInt() function parses a string and returns an integer.
Here's an example:

>>> const a = parseInt("007");

The above function converts the string 007 to the integer 7. If the
first character in the string can't be converted into a number, then
it returns NaN.

→ Use parseInt() in the convertToInteger function so it converts the
input string str into an integer, and returns it.       */

function convertToInteger(str) {
    return parseInt(str)
  }
  
var prueba2 = "0123456789"
console.log(convertToInteger(prueba2));

// -----------------------------------------------------------------
