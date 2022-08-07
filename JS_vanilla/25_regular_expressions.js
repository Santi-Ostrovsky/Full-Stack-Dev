console.log(" \nREGULAR EXPRESSIONS \n");
console.log(" \nUSING THE 'TEST' METHOD \n");

/*
- REGEX => TEST => STR
- STR => MATCH => REGEX
- OLD-STR => .REPLACE(O-S, X) => NEW-STR

- /x/ => literal
- /|/ => 'or' possibilities
- /x/i => all letter cases
- /x/g => global (more than once)
- /./ => wildcard
- /[x]/ => specific characters
- /[a-z]/ => alphabetical range
- /[1-99]/ => numerical range
- /[^x]/ => negated character (not x) (inside brackets)
- /x+/ => one or more times
- /x* / => zero or more times
- /xx?/ => lazy matching (smallest possible pattern)
- /^x/ => starts with x (no brackets)
- /x$/ => ends with x
- /\w/ => shorthand character class (includes all letters -upper and
    lower-, numbers and under-sore '_'). Equivalent to [A-Za-z0-9_].
- /\W/ => opposite to '\w' (lower vs upper case). Matches all non-word characters.
- /\d/ => shorthand character to find all numbers ([0-9]).
- /\D/ => opposite to '\d' (lower vs upper case).
- /\s/ => shorthand character class for whitespace and [ \r\t\f\n\v].
- /\S/ => opposite to '\s\ (lower vs upper case).
- /x{min,max}/ => min and max occurrences of 'x'.
- /x{min,}/ => only lower number of occurrences of 'x'.
- /x{y}/ => exact number of occurrences of 'x'.
- /x?/ => 'x' is optional character, may or may not be there.
- /x(?=y)/ => positive lookahead (when 'x' is followed by 'y').
- /x(?!y)/ => negative lookahead (when 'x' is NOT followed by 'y').
- /P(engu|umpk)in/g => mixed grouping of characters (Penguin or Pumpkin)
- /(\w+)/ => capture groups (in this case, repeated alphanumeric words).
*/

/* Regular expressions are used in programming languages to match parts
of strings. You create patterns to help you do that matching.

If you want to find the word 'the' in the string 'The dog chased the cat',
you could use the following regular expression: '/the/'. Notice that
quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is
using the '.test()' method. The .test() method takes the regex, applies
it to a string (which is placed inside the parentheses), and returns true
or false if your pattern finds something or not.

>>> let testStr = "freeCodeCamp";
>>> let testRegex = /Code/;
>>> testRegex.test(testStr);

The test method here returns true.

------------------------------

Apply the regex 'myRegex' on the string 'myString' using the '.test()'
method:    */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

// -----------------------------------------------------------------

console.log(" \nMATCH LITERAL STRINGS \n");

/* In the last challenge, you searched for the word Hello using the
regular expression /Hello/. That regex searched for a literal match of
the string Hello. Here's another example searching for a literal match
of the string Kevin:

>>> let testStr = "Hello, my name is Kevin.";
>>> let testRegex = /Kevin/;
>>> testRegex.test(testStr);

This test call will return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/
will not match kevin or KEVIN:

>>> let wrongRegex = /kevin/;
>>> wrongRegex.test(testStr);

This test call will return false.

------------------------------

Complete the regex 'waldoRegex' to find "Waldo" in the string
'waldoIsHiding' with a literal match.    */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2);

// -----------------------------------------------------------------

console.log(" \nMATCH A LITERAL STRING WITH DIFFERENT POSSIBILITIES \n");

/* Using regexes like /coding/, you can look for the pattern coding in
another string.

This is powerful to search single strings, but it's limited to only one
pattern. You can search for multiple patterns using the 'alternation' or
'OR' operator: '|'.

This operator matches patterns either before or after it. For example,
if you wanted to match the strings 'yes' or 'no', the regex you want is
/yes|no/.

You can also search for more than just two patterns. You can do this by
adding more patterns with more OR operators separating them, like
/yes|no|maybe/.

------------------------------

Complete the regex 'petRegex' to match the pets 'dog', 'cat', 'bird', or
'fish'.    */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
console.log(result3);

// -----------------------------------------------------------------

console.log(" \nIGNORE CASE WHILE MATCHING \n");

/* Up until now, you've looked at regexes to do literal matches of
strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase
letters and lowercase letters. Examples of uppercase are 'A', 'B', and
'C'. Examples of lowercase are 'a', 'b', and 'c'.

You can match both cases using what is called a flag. There are other
flags but here you'll focus on the flag that ignores case - the 'i' flag.
You can use it by appending it to the regex. An example of using this
flag is '/ignorecase/i'. This regex can match the strings 'ignorecase',
'igNoreCase', and 'IgnoreCase'.

------------------------------

Write a regex 'fccRegex' to match 'freeCodeCamp', no matter its case.
Your regex should not match any abbreviations or variations with spaces. */

let myString4 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myString4);
console.log(result4);

// -----------------------------------------------------------------

console.log(" \nEXTRACT MATCHES \n");

/* So far, you have only been checking if a pattern exists or not within
a string. You can also extract the actual matches you found with the
'.match()' method.

To use the '.match()' method, apply the method on a string and pass in
the regex inside the parentheses.

Here's an example:

>>> "Hello, World!".match(/Hello/);
>>> let ourStr = "Regular expressions";
>>> let ourRegex = /expressions/;
>>> ourStr.match(ourRegex);

Here the first match would return ["Hello"] and the second would return
["expressions"].

Note that the '.match' syntax is the "opposite" of the .'test' method
you have been using so far:

>>> 'string'.match(/regex/);
>>> /regex/.test('string');

------------------------------

Apply the '.match()' method to extract the string 'coding'.    */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
console.log(result5);

// ATTEMPTING TO EXTRACT AN INCOMPATIBLE MATCH RETURNS 'NULL' VALUE.

// -----------------------------------------------------------------

console.log(" \nFIND MORE THAN THE FIRST MATCH \n");

/* So far, you have only been able to extract or search a pattern once.

>>> let testStr = "Repeat, Repeat, Repeat";
>>> let ourRegex = /Repeat/;
>>> testStr.match(ourRegex);

Here '.match()' would return ["Repeat"].

To search or extract a pattern more than once, you can use the 'g' flag.

>>> let repeatRegex = /Repeat/g;
>>> testStr.match(repeatRegex);

And here '.match()' returns the value ["Repeat", "Repeat", "Repeat"]

------------------------------

Using the regex 'starRegex', find and extract both 'Twinkle' words from
the string 'twinkleStar'.

Note: You can have multiple flags on your regex like '/search/gi'    */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line
console.log(result6);

// -----------------------------------------------------------------

console.log(" \nMATCH ANYTHING WITH THE WILDCARD PERIOD \n");

/* Sometimes you won't (or don't need to) know the exact characters in
your patterns. Thinking of all words that match, say, a misspelling
would take a long time. Luckily, you can save time using the wildcard
character: '.'

The wildcard character '.' will match any one character. The wildcard is
also called dot and period. You can use the wildcard character just like
any other character in the regex. For example, if you wanted to match
'hug', 'huh', 'hut', and 'hum', you can use the regex /hu./ to match all
four words.

>>> let humStr = "I'll hum a song";
>>> let hugStr = "Bear hug";
>>> let huRegex = /hu./;
>>> huRegex.test(humStr);
>>> huRegex.test(hugStr);

Both of these test calls would return true.

------------------------------

Complete the regex 'unRegex' so that it matches the strings 'run', 'sun',
'fun', 'pun', 'nun', and 'bun'. Your regex should use the wildcard
character.    */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./gi;
let result7 = unRegex.test(exampleStr);
console.log(result7);

// -----------------------------------------------------------------

console.log(" \nMATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES \n");

/* You learned how to match literal patterns (/literal/) and wildcard
character (/./). Those are the extremes of regular expressions, where
one finds exact matches and the other matches everything. There are
options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with
character classes. Character classes allow you to define a group of
characters you wish to match by placing them inside square '[]' brackets.

For example, you want to match bag, big, and bug but not bog. You can
create the regex /b[aiu]g/ to do this. The [aiu] is the character class
that will only match the characters a, i, or u.

>>> let bigStr = "big";
>>> let bagStr = "bag";
>>> let bugStr = "bug";
>>> let bogStr = "bog";
>>> let bgRegex = /b[aiu]g/;
>>> bigStr.match(bgRegex);
>>> bagStr.match(bgRegex);
>>> bugStr.match(bgRegex);
>>> bogStr.match(bgRegex);

In order, the four 'match' calls would return the values ["big"],
["bag"], ["bug"], and 'null'.

------------------------------

Use a character class with vowels ('a', 'e', 'i', 'o', 'u') in your
regex 'vowelRegex' to find all the vowels in the string 'quoteSample'.

Note: Be sure to match both upper- and lowercase vowels.    */

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex);
console.log(result8);

// -----------------------------------------------------------------

console.log(" \nMATCH LETTERS OF THE ALPHABET \n");

/* You saw how you can use character sets to specify a group of
characters to match, but that's a lot of typing when you need to match
a large range of characters (for example, every letter in the alphabet).
Fortunately, there is a built-in feature that makes this short and
simple.

Inside a character set, you can define a range of characters to match
using a hyphen character: '-'.

For example, to match lowercase letters 'a' through 'e' you would use
'[a-e]'.

>>> let catStr = "cat";
>>> let batStr = "bat";
>>> let matStr = "mat";
>>> let bgRegex = /[a-e]at/;
>>> catStr.match(bgRegex);
>>> batStr.match(bgRegex);
>>> matStr.match(bgRegex);

In order, the three 'match' calls would return the values ["cat"],
["bat"], and 'null'.

------------------------------

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.    */

let quoteSample9 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample9.match(alphabetRegex);
console.log(result9);

// -----------------------------------------------------------------

console.log(" \nMATCH RANGE OF NUMBERS AND LETTERS \n");

/* Using the hyphen (-) to match a range of characters is not limited
to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between '0' and '5', including
the '0' and the '5'.

Also, it is possible to combine a range of letters and numbers in a
single character set.

>>> let jennyStr = "Jenny8675309";
>>> let myRegex = /[a-z0-9]/ig;
>>> jennyStr.match(myRegex);

------------------------------

Create a single regex that matches a range of letters between 'h' and
's', and a range of numbers between 2 and 6. Remember to include the
appropriate flags in the regex.    */

let quoteSample10 = "Blueberry 3.141592653s are delicious.";
let myRegex10 = /[h-s2-6]/gi;
let result10 = quoteSample10.match(myRegex10);
console.log(result10);

// -----------------------------------------------------------------

console.log(" \nMATCH SINGLE CHARACTERS NOT SPECIFIED \n");

/* So far, you have created a set of characters that you want to match,
but you could also create a set of characters that you do not want to
match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after
the opening bracket and before the characters you do not want to match.

For example, '/[^aeiou]/gi' matches all characters that are not a vowel.
Note that characters like '.', '!', '[', '@', '/' and 'white space' are
matched - the negated vowel character set only excludes the vowel
characters.

------------------------------

Create a single regex that matches all characters that are not a number
or a vowel. Remember to include the appropriate flags in the regex.    */

let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^0-9aeiou]/gi;
let result11 = quoteSample11.match(myRegex11);
console.log(result11);

// -----------------------------------------------------------------

console.log(" \nMATCH CHARACTERS THAT OCCUR ONE OR MORE TIMES \n");

/* Sometimes, you need to match a character (or group of characters)
that appears one or more times in a row. This means it occurs at least
once, and may be repeated.

You can use the '+' character to check if that is the case. Remember,
the character or pattern has to be present consecutively. That is, the
character has to repeat one after the other.

For example, '/a+/g' would find one match in 'abc' and return ["a"].
Because of the '+', it would also find a single match in 'aabc' and
return ["aa"].

If it were instead checking the string 'abab', it would find two matches
and return ["a", "a"] because the 'a' characters are not in a row -
there is a 'b' between them. Finally, since there is no 'a' in the
string 'bcd', it wouldn't find a match.

------------------------------

You want to find matches when the letter 's' occurs one or more times in
'Mississippi'. Write a regex that uses the '+' sign.    */

let difficultSpelling = "Mississippi";
let myRegex12 = /s+/g;
let result12 = difficultSpelling.match(myRegex12);
console.log(result12);

// -----------------------------------------------------------------

console.log(" \nMATCH CHARACTERS THAT OCCUR ZEO OR MORE TIMES \n");

/* The last challenge used the plus '+' sign to look for characters that
occur one or more times. There's also an option that matches characters
that occur zero or more times.

The character to do this is the asterisk or star: '*'.

>>> let soccerWord = "gooooooooal!";
>>> let gPhrase = "gut feeling";
>>> let oPhrase = "over the moon";
>>> let goRegex = /go* /;
>>> soccerWord.match(goRegex);
>>> gPhrase.match(goRegex);
>>> oPhrase.match(goRegex);

In order, the three 'match' calls would return the values ["goooooooo"],
["g"], and 'null'.

------------------------------

Create a regex 'chewieRegex' that uses the '*' character to match an
uppercase 'A' character immediately followed by zero or more lowercase
'a' characters in 'chewieQuote'. Your regex does not need flags or
character classes, and it should not match any of the other quotes.  */

const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/;
// Only change code above this line
let result13 = chewieQuote.match(chewieRegex);
console.log(result13);

// -----------------------------------------------------------------

console.log(" \nFIND CHARACTERS WITH 'LAZY' MATCHING \n");

/* In regular expressions, a greedy match finds the longest possible
part of a string that fits the regex pattern and returns it as a match.
The alternative is called a lazy match, which finds the smallest
possible part of the string that satisfies the regex pattern.

You can apply the regex '/t[a-z]*i/' to the string "titanic". This regex
is basically a pattern that starts with 't', ends with 'i', and has some
letters in between.

Regular expressions are by default greedy, so the match would return
["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the '?' character to change it to lazy matching.
"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns
["ti"].

Note: Parsing HTML with regular expressions should be avoided, but
pattern matching an HTML string with regular expressions is completely
fine.

------------------------------

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text
"<h1>Winter is coming</h1>". Remember the wildcard . in a regular
expression matches any character.    */

let text = "<h1>Winter is coming</h1>";
let myRegex14 = /<.*?>/;
let result14 = text.match(myRegex14);
console.log(result14);

// -----------------------------------------------------------------

console.log(" \nMATCH BEGINNING STRING PATTERS \n");

/* Prior challenges showed that regular expressions can be used to look
for a number of matches. They are also used to search for patterns in
specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a
character set to create a negated character set in the form
[^thingsThatWillNotBeMatched]. Outside of a character set, the caret
is used to search for patterns at the beginning of strings.

>>> let firstString = "Ricky is first and can be found.";
>>> let firstRegex = /^Ricky/;
>>> firstRegex.test(firstString);
>>> let notFirst = "You can't find Ricky now.";
>>> firstRegex.test(notFirst);

The first test call would return true, while the second would return
false.

------------------------------

Use the caret character in a regex to find 'Cal' only in the beginning
of the string 'rickyAndCal'.    */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result15 = calRegex.test(rickyAndCal);
console.log(result15);

// -----------------------------------------------------------------

console.log(" \nMATCH ENDING STRING PATTERS \n");

/* In the last challenge, you learned to use the caret character to
search for patterns at the beginning of strings. There is also a way
to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character '$' at
the end of the regex.

>>> let theEnding = "This is a never ending story";
>>> let storyRegex = /story$/;
>>> storyRegex.test(theEnding);
>>> let noEnding = "Sometimes a story will have to end";
>>> storyRegex.test(noEnding);

The first 'test' call would return true, while the second would return
false.

------------------------------

Use the anchor character ($) to match the string 'caboose' at the end of
the string 'caboose'.    */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result16 = lastRegex.test(caboose);
console.log(result16);

// -----------------------------------------------------------------

console.log(" \nMATCH ALL LETTERS AND NUMBERS \n");

/* Using character classes, you were able to search for all letters of
the alphabet with [a-z]. This kind of character class is common enough
that there is a shortcut for it, although it includes a few extra
characters as well.

The closest character class in JavaScript to match the alphabet is '\w'.
This shortcut is equal to [A-Za-z0-9_]. This character class matches
upper and lowercase letters plus numbers. Note, this character class
also includes the underscore character (_).

>>> let longHand = /[A-Za-z0-9_]+/;
>>> let shortHand = /\w+/;
>>> let numbers = "42";
>>> let varNames = "important_var";
>>> longHand.test(numbers);
>>> shortHand.test(numbers);
>>> longHand.test(varNames);
>>> shortHand.test(varNames);

All four of these 'test' calls would return true.

These shortcut character classes are also known as shorthand character
classes.

------------------------------

Use the shorthand character class '\w' to count the number of
alphanumeric characters in various quotes and strings.    */

let quoteSample17 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result17 = quoteSample17.match(alphabetRegexV2).length;
console.log(result17);

// -----------------------------------------------------------------

console.log(" \nMATCH EVERYTHING BUT LETTERS AND NUMBERS \n");

/* You've learned that you can use a shortcut to match alphanumerics
[A-Za-z0-9_] using '\w'. A natural pattern you might want to search
for is the opposite of alphanumerics.

You can search for the opposite of the '\w' with '\W'. Note, the
opposite pattern uses a capital letter. This shortcut is the same as
[^A-Za-z0-9_].

>>> let shortHand = /\W/;
>>> let numbers = "42%";
>>> let sentence = "Coding!";
>>> numbers.match(shortHand);
>>> sentence.match(shortHand);

The first 'match' call would return the value ["%"] and the second
would return ["!"].

------------------------------

Use the shorthand character class \W to count the number of
non-alphanumeric characters in various quotes and strings.    */

let quoteSample18 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // count spaces and '.'
let result18 = quoteSample18.match(nonAlphabetRegex).length;
console.log(result18);

// -----------------------------------------------------------------

console.log(" \nMATCH ALL NUMBERS \n");

// /\d/

/* ------------------------------

Use the shorthand character class '\d' to count how many digits are in
movie titles. Written out numbers ("six" instead of 6) do not count. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result19 = movieName.match(numRegex).length;
console.log(result19);

// -----------------------------------------------------------------

console.log(" \nMATCH EVERYTHING BUT NUMBERS \n");

// /\D/

/* ------------------------------

Use the shorthand character class for non-digits '\D' to count how
many non-digits are in movie titles. */

let movieName20 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result20 = movieName20.match(noNumRegex).length;
console.log(result20);

// -----------------------------------------------------------------

console.log(" \nMATCH WHITESPACE \n");

/* /\s/ - This pattern not only matches whitespace, but also 'carriage
return', 'tab', 'form feed', and 'new line' characters. You can think
of it as similar to the character class [ \r\t\f\n\v].

>>> let whiteSpace = "Whitespace. Whitespace everywhere!"
>>> let spaceRegex = /\s/g;
>>> whiteSpace.match(spaceRegex);

This match call would return [" ", " "].

------------------------------

Change the regex countWhiteSpace to look for multiple whitespace
characters in a string. */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result21 = sample.match(countWhiteSpace);
console.log(result21);

// -----------------------------------------------------------------

console.log(" \nMATCH NON-WHITESPACE CHARACTERS \n");

/* /\S/ - Equivalent to [^ \r\t\f\n\v].

>>> let whiteSpace = "Whitespace. Whitespace everywhere!"
>>> let nonSpaceRegex = /\S/g;
>>> whiteSpace.match(nonSpaceRegex).length;

The value returned by the .length method would be 32.

------------------------------

Change the regex countNonWhiteSpace to look for multiple non-whitespace
characters in a string. */

let sample22 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result22 = sample22.match(countNonWhiteSpace);
console.log(result22);

// -----------------------------------------------------------------

console.log(" \nSPECIFY NUMBER OF MATCHES \n");

/* When '*' (zero or more) and '+' (one or more) are not enough, you
can specify the lower and upper number of patterns with quantity
specifiers. Quantity specifiers are used with curly brackets ({ and }).
You put two numbers between the curly brackets - for the lower and
upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times
in the string ah, your regex would be /a{3,5}h/.

>>> let A4 = "aaaah";
>>> let A2 = "aah";
>>> let multipleA = /a{3,5}h/;
>>> multipleA.test(A4);
>>> multipleA.test(A2);

The first test call would return true, while the second would return
false.

------------------------------

Change the regex 'ohRegex' to match the entire phrase 'Oh no' only when
it has '3' to '6' letter 'h's.    */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result23 = ohRegex.test(ohStr);
console.log(result23);

// -----------------------------------------------------------------

console.log(" \nSPECIFY ONLY THE LOWER NUMBER OF MATCHES \n");

/* You can specify the lower and upper number of patterns with quantity
specifiers using curly brackets. Sometimes you only want to specify the
lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number
followed by a comma.

For example, to match only the string hah with the letter a appearing
at least 3 times, your regex would be /ha{3,}h/.

>>> let A4 = "haaaah";
>>> let A2 = "haah";
>>> let A100 = "h" + "a".repeat(100) + "h";
>>> let multipleA = /ha{3,}h/;
>>> multipleA.test(A4);
>>> multipleA.test(A2);
>>> multipleA.test(A100);

In order, the three test calls would return true, false, and true.

------------------------------

Change the regex 'haRegex' to match the word 'Hazzah' only when it has
four or more letter 'z's.    */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result24 = haRegex.test(haStr);
console.log(result24);

// -----------------------------------------------------------------

console.log(" \nSPECIFY EXACT NUMBER OF MATCHES \n");

/* In stead of minimum and maximum amounts between curly brackets '{ }'
separated by a comma ',', just put the specific number.

>>> let A4 = "haaaah";
>>> let A3 = "haaah";
>>> let A100 = "h" + "a".repeat(100) + "h";
>>> let multipleHA = /ha{3}h/;
>>> multipleHA.test(A4);
>>> multipleHA.test(A3);
>>> multipleHA.test(A100);

In order, the three test calls would return false, true, and false.

------------------------------

Change the regex timRegex to match the word Timber only when it has
four letter m's.    */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result25 = timRegex.test(timStr);
console.log(result25);

// -----------------------------------------------------------------

console.log(" \nCHECK ALL OR NONE / OPTIONAL CHARACTERS \n");

/* Sometimes the patterns you want to search for may have parts of it
that may or may not exist. However, it may be important to check for
them nonetheless.

You can specify the possible existence of an element with a question
mark, '?'. This checks for zero or one of the preceding element. You
can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British
English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Both uses of the test method would return true.

------------------------------

Change the regex 'favRegex' to match both the American English
(favorite) and the British English (favourite) version of the word.    */

let favWord = "favorite";
let favRegex = /favou?rite/i;
let result26 = favRegex.test(favWord);
console.log(result26);

// -----------------------------------------------------------------

console.log(" \nPOSITIVE & NEGATIVE LOOKAHEADS \n");

/* Lookaheads are patterns that tell JS to look-ahead in your string
to check for patterns further along. This can be useful when you want
to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative
lookahead.

A positive lookahead will look to make sure the element in the search
pattern is there, but won't actually match it. A positive lookahead is
used as '(?=...)' where the '...' is the required part that is not
matched.

On the other hand, a negative lookahead will look to make sure the
element in the search pattern is not there. A negative lookahead is
used as '(?!...)' where the '...' is the pattern that you do not want
to be there. The rest of the pattern is returned if the negative
lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

>>> let quit = "qu";
>>> let noquit = "qt";
>>> let quRegex= /q(?=u)/; --> true si la que le sigue es una 'u'
>>> let qRegex = /q(?!u)/; --> true si la que le sigue NO es una 'u'
>>> quit.match(quRegex);
>>> noquit.match(qRegex);

Both of these 'match' calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns
in one string. Here is a (naively) simple password checker that looks
for between 3 and 6 characters and at least one number:

>>> let password = "abc123";
>>> let checkPass = /(?=\w{3,6})(?=\D*\d)/;
>>> checkPass.test(password);

------------------------------

Use lookaheads in the 'pwRegex' to match passwords that are greater
than 5 characters long, and have two consecutive digits.    */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/;
let result27 = pwRegex.test(sampleWord);
console.log(result27);

// -----------------------------------------------------------------

console.log(" \nCHECK FOR MIXED GROUPING OF CHARACTERS \n");

/* Sometimes we want to check for groups of characters using a
Regular Expression and to achieve that we use parentheses '()'.

If you want to find either 'Penguin' or 'Pumpkin' in a string, you can
use the following Regular Expression: '/P(engu|umpk)in/g'

Then check whether the desired string groups are in the test string
by using the '.test()' method.

>>> let testStr = "Pumpkin";
>>> let testRegex = /P(engu|umpk)in/;
>>> testRegex.test(testStr);

The 'test' method here would return true.

------------------------------

Fix the regex so that it checks for the names of 'Franklin Roosevelt'
or 'Eleanor Roosevelt' in a case sensitive manner and it should make
concessions for middle names.

Then fix the code so that the regex that you have created is checked
against 'myString' and either true or false is returned depending on
whether the regex matches.    */

let myString28 = "Eleanor Roosevelt";
let myRegex28 = /(Franklin|Eleanor).*?Roosevelt/g;
let result28 = myRegex28.test(myString28);
// After passing the challenge experiment with 'myString' and
// see how the grouping works
console.log(result28);

// -----------------------------------------------------------------

console.log(" \nREUSE PATTERNS USING CAPTURE GROUPS \n");

/* Say you want to match a word that occurs multiple times like below.

>>> let repeatStr = "row row row your boat";

You could use '/row row row/', but what if you don't know the specific
word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be
captured in parentheses. In this case, the goal is to capture a word
consisting of alphanumeric characters so the capture group will be
'\w+' enclosed by parentheses: '/(\w+)/'.

The substring matched by the group is saved to a temporary
"variable", which can be accessed within the same regex using a
backslash and the number of the capture group (e.g. '\1'). Capture
groups are automatically numbered by the position of their opening
parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by
spaces:

>>> let repeatRegex = /(\w+) \1 \1/;
>>> repeatRegex.test(repeatStr); // Returns true
>>> repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

Using the '.match()' method on a string will return an array with
the matched substring, along with its captured groups.

------------------------------

Use capture groups in 'reRegex' to match a string that consists of
only the same number repeated exactly three times separated by single
spaces.    */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
//          OR '/^(\d+) \1 \1$/'
let result29 = reRegex.test(repeatNum);
console.log(result29);

// -----------------------------------------------------------------

console.log(" \nUSE CAPTURE GROUPS TO SEARCH AND REPLACE \n");

/* Searching is useful. However, you can make searching even more
powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using '.replace()' on a
string. The inputs for '.replace()' is first the regex pattern you want
to search for. The second parameter is the string to replace the match
or a function to do something.

>>> let wrongText = "The sky is silver.";
>>> let silverRegex = /silver/;
>>> wrongText.replace(silverRegex, "blue");

The 'replace' call would return the string 'The sky is blue.'.

You can also access capture groups in the replacement string with
dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

The 'replace' call would return the string 'Camp Code'.

------------------------------

Write a regex 'fixRegex' using three capture groups that will search
for each word in the string 'one two three'. Then update the
'replaceText' variable to replace 'one two three' with the string
'three two one' and assign the result to the 'result' variable.Make
sure you are utilizing capture groups in the replacement string using
the dollar sign ($) syntax.    */

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result30 = str.replace(fixRegex, replaceText);
console.log(result30);

// -----------------------------------------------------------------

console.log(" \n- EJERCICIO FINAL - \n");

// ELIMINA LOS ESPACIOS EN BLANCO AL COMIENZO Y AL FINAL DEL STRING
// SIN USAR 'String.prototype.trim()'.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result31 = hello.replace(wsRegex, "");
console.log(result31);

// -----------------------------------------------------------------

console.log(" \n- EJERCICIO FINAL 2 - \n");

// Restrict Possible Usernames

/* Usernames are used everywhere on the internet. They are what give
users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple
rules that users have to follow when creating their username:

1- Usernames can only use alpha-numeric characters.
2- The only numbers in the username have to be at the end.
    There can be zero or more of them at the end. Username cannot
    start with the number.
3- Username letters can be lowercase and uppercase.
4- Usernames have to be at least two characters long. A two-character
    username can only use alphabet letters as characters. */

let username = "JackOfAllTrades";
// Change below this line
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
/*
    1) ^ - start of input
    2) [a-z] - first character is a letter
    3) [a-z]+ - following characters are letters
    4) \d*$ - input ends with 0 or more digits
    5) | - or
    6) ^[a-z] - first character is a letter
    7) \d\d+ - following characters are 2 or more digits
    8) $ - end of input
    9) i - ignore case of input
    */
// Change above this line
let ok = userCheck.test(username);
console.log(ok);

// OR

let username2 = "JackOfAllTrades";
// Change below this line
let userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
/*
1) ^ - start of input
2) [a-z] - first character is a letter
3) [0-9]{2,0} - ends with two or more numbers
4) | - or
5) [a-z]+ - has one or more letters next
6) \d* - and ends with zero or more numbers
7) $ - end of input
8) i - ignore case of input
*/
// Change above this line
let ok2 = userCheck2.test(username2);
console.log(ok2);
