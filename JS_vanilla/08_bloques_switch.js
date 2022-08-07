console.log(' \nSWITCH STATEMENTS \n')

/* Switch statements serve the purpose of creating a big list of
conditions, without the need of an If-Else If-Else block. By using
The keyword 'switch' and enumerating cases, we can create a list of
conditions, like so:    */
function caseInSwitch(val) {
    var result;
    switch(val) {
        case 1: // 'case' is the keyword, and what follows is the
            result = 'alpha'; // possible input in the function.
            break;
        case 2:
            result = 'beta';
            break;
        case 3:
            result = 'gamma';
            break;
        case 4:
            result = 'delta';
            break;
        default: // 'default' works like an 'Else' statement.
            result = 'other';
            break;
    }
    return result;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(99));

/* When multiple possible answers must return the same result, we
must group the cases together without individual values or break
statements, like so:    */

function mySecondSwitch(val) {
    var result;
    switch (val) {
        case 1:
        case 2:
        case 3:
            result = 'low';
            break;
        case 4:
        case 5:
        case 6:
            result = 'mid';
            break;
        case 7:
        case 8:
        case 9:
            result = 'high';
            break;
    }
    return result;
}

console.log('');
console.log(mySecondSwitch(2));
console.log(mySecondSwitch(4));
console.log(mySecondSwitch(6));
console.log(mySecondSwitch(8));
console.log(mySecondSwitch(10)); /* 10 is 'undefined' since there is
                                   no 'default' statement.    */

// -----------------------------------------------------------------