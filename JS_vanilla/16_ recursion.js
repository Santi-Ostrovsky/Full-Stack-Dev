console.log(' \nRECURSION \n');

/*
Recursion is the concept that a function can be expressed in terms
of itself. To help understand this, start by thinking about the
following task: multiply the first n elements of an array to create
the product of those elements. Using a for loop, you could do this:

>>> function multiply(arr, n) {
>>>   let product = 1;
>>>   for (let i = 0; i < n; i++) {
>>>     product *= arr[i];
>>>   }
>>>   return product;
>>> }

However, notice that:
multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].
That means you can rewrite multiply in terms of itself and never
need to use a loop.

>>> function multiply(arr, n) {
>>>   if (n <= 0) {
>>>     return 1;
>>>   } else {
>>>     return multiply(arr, n - 1) * arr[n - 1];
>>>   }
>>> }

The recursive version of multiply breaks down like this. In the base
case, where n <= 0, it returns 1. For larger values of n, it calls
itself, but with n - 1. That function call is evaluated in the same
way, calling multiply again until n <= 0. At this point, all the
functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return
without calling the function again (in this example, when n <= 0),
otherwise they can never finish executing.      */

/* Write a recursive function, sum(arr, n), that returns the sum of
the first n elements of an array arr.       

- sum([1], 0) should equal 0.
- sum([2, 3, 4], 1) should equal 2.
- sum([2, 3, 4, 5], 3) should equal 9.
- Your code should not rely on any kind of loops (for or while or
  higher order functions such as forEach, map, filter, or reduce.).
- You should use recursion to solve this problem.       */

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([2, 3, 4, 5], 3));

console.log('');
// -----------------------------------------------------------------

/* In the previous challenge, you learned how to use recursion to
replace a for loop. Now, let's look at a more complex function
that returns an array of consecutive integers starting with 1
through the number passed to the function.

As mentioned in the previous challenge, there will be a base case.
The base case tells the recursive function when it no longer needs
to call itself. It is a simple case where the return value is
already known. There will also be a recursive call which executes
the original function with different arguments. If the function is
written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that
returns an array containing the numbers 1 through n. This function
will need to accept an argument, n, representing the final number.
Then it will need to call itself with progressively smaller values
of n until it reaches 1. You could write the function as follows:

>>> function countup(n) {
>>>   if (n < 1) {
>>>     return [];
>>>   } else {
>>>     const countArray = countup(n - 1);
>>>     countArray.push(n);
>>>     return countArray;
>>>   }
>>> }

>>> console.log(countup(5));

→ The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of 'n'
decreases, but the values in the final array are increasing.
This happens because the push happens last, after the recursive
call has returned. At the point where n is pushed into the array,
countup(n - 1) has already been evaluated and returned
[1, 2, ..., n - 1].     */

/* We have defined a function called countdown with one parameter
(n). The function should use recursion to return an array
containing the integers n through 1 based on the n parameter. If
the function is called with a number less than 1, the function
should return an empty array. For example, calling this function
with n = 5 should return the array [5, 4, 3, 2, 1]. Your function
must use recursion by calling itself and must not use loops of any
kind.

- countdown(-1) should return an empty array.
- countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- countdown(5) should return [5, 4, 3, 2, 1]
- Your code should not rely on any kind of loops (for, while or
higher order functions such as forEach, map, filter, and reduce).*/

function countdown(n){
    if (n < 1) {
      return [];
    } else {
      var arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
}

console.log(countdown(10));
console.log(countdown(5));
console.log(countdown(-1));

// OTRAS FORMAS:

function countdown2(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown3(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}

// -----------------------------------------------------------------

/* Continuing from the previous challenge, we provide you another
opportunity to create a recursive function to solve a problem.

We have defined a function named rangeOfNumbers with two parameters.
The function should return an array of integers which begins with a
number represented by the startNum parameter and ends with a
number represented by the endNum parameter. The starting number
will always be less than or equal to the ending number. Your
function must use recursion by calling itself and not use loops of
any kind. It should also work for cases where both startNum and
endNum are the same.

- Your function should return an array.
- Your code should not use any loop syntax (for or while or higher
    order functions such as forEach, map, filter, or reduce).
- rangeOfNumbers should use recursion (call itself) to solve this
    challenge.
- rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
- rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
- rangeOfNumbers(4, 4) should return [4].       */

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
}

// OTRA
function rangeOfNumbers2(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// OTRA
function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

