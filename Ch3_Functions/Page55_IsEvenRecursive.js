// ---------------------------------------------------
// Zero is even, one is odd, for any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to description.
//
// DN: It should also handle negative numbers, I think.
// ---------------------------------------------------
function isEven(x) {
    return isEvenRecursively(Math.abs(x));
}

function isEvenRecursively(x) {
    if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    }
    
    return isEven(x - 2);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// Even
console.log(isEven(7));
console.log(isEven(-1));
// Odd
console.log(isEven(8));
console.log(isEven(-10));
console.log(isEven(0));