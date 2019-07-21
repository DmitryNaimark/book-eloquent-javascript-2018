// ---------------------------------------------------
// Zero is even, one is odd, for any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to description.
// ---------------------------------------------------
function isEven(x) {
    if (x < 0) {
        return isEven(Math.abs(x));
    } else if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    }
    
    return isEven(x - 2);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// Odd
console.log(isEven(7));
console.log(isEven(-1));
// Even
console.log(isEven(8));
console.log(isEven(-10));
console.log(isEven(0));