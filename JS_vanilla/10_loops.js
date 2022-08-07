console.log(' \nLOOPS \n')

/* While and For loops exist as in Python, and their syntax is as
follows:    */

// WHILE LOOPS
console.log('');

var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// FOR LOOPS

/* For loops have a different syntax. After the 'for' keyword,
in between parentheses go 3 different arguments:
- initialization of a variable;
- condition that has to be in order to stop the loop;
- task to be performed after each iteration.
*/
console.log('');

var newArray = []

for (var n = 2; n <= 10; n += 2) {
    newArray.push(n);
}

console.log(newArray);
console.log('');

// Now count backwards from 10 to 0 in steps of 2:
for (var x = 10; x > 0; x -= 2) {
    console.log(x);
}

// Iterate through items in an Array
console.log('');

var numbersArray = [9, 10, 11, 12];
var total = 0; // THIS VARIABLE NEEDS TO HAVE AN ASSIGNED VALUE

for (var i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
}

console.log(total);

// FOR...OF LOOPS TO ITERATE THROUGH ARRAYS
console.log('');

var forOfArray = [10, 20, 30, 40, 50];
for (element in forOfArray) {
    forOfArray[element] += 5; // por cada item del array, sumar 5 a c/u
}

console.log(forOfArray);

// NESTED FOR LOOPS
console.log('');

/* Create a nested for loop to multiple all values inside an array
of arrays:    */

var multiplyThis = [[1, 2], [3, 4], [5, 6, 7]]

function multiplyNumbers(arr) {
    var result = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            result *= arr[i][j];
        }
    }
    return result;
}

var result = multiplyNumbers(multiplyThis);

console.log(result);

// DO while loops

/* While loops will check if a condition is true before running,
but DO while loops, will always perform a task, and then check if
the condition is met to continue running.    */
console.log('');

/* In the following example, we have an empty array and the variable
i with a value of 10. Below, if it was a regular while loop, when
the condition 'i < 5' is evaluated, since 'i' has a value of 10 and
already exceeds '5', the loop would not change the value of 'i',
neither push values into the empty array. But, since it is a 'do'
loop, there's always an execution before the condition is evaluated.
Here, the 'do' loop is pushing the value of 'i' into the empty array
and changing the value of 'i' by 1. Then, the condition is evaluated
and since it was already met, the loop stops its execution.   */
var example1 = []
var i = 10

do {
    example1.push(i);
    i++
} while (i < 5)

console.log(i, example1); // console returns '11 [10]'

// -----------------------------------------------------------------

console.log(' \nFOR...IN LOOPS \n')

/* Objects don't have indexes or .length property, so regular FOR
loops cannot iterate through them. In stead, we use FOR...IN loops,
that can iterate through all key-value pairs inside an object.    */

/* for [variable/key] in [object] {
    [code block]
}     */

console.log('');

var monsters = {
    'Canada': 'Sasquatch',
    'Nepal' : 'Yeti',
    'Scotland': 'Loch Ness Monster'
}

// Lets get all keys and all values:

for (let country in monsters) {
    console.log(country, '-->', monsters[country]);
}

