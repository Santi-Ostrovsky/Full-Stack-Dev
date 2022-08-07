console.log(' \nIF STATEMENTS \n')

/* Inside functions, Instead, the 'else if' and 'else' clauses can
be described outside the initial IF clause's block:    */
function trueOrFalse(statement) {
    if (statement) {
        return 'Yes, it is True.';
    }
    return 'No, it is False.';
}

console.log(trueOrFalse(2 < 3));
console.log(trueOrFalse(2 < 0));

/* If more than one condition is tested in an 'if' statement,
'else if' and 'else' can be used after the closing curly brackets
to express the next condition (else if) or the rest (else).    */
if (10 < 0) {
    console.log('10 is negative.')
} else console.log('10 is positive')

if (-1 <0) {
    console.log('-1 is negative.')
} else console.log('-1 is positive')

// -----------------------------------------------------------------
