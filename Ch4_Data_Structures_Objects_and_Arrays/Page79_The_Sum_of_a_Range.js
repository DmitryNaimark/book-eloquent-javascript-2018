// ---------------------------------------------------
// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.
//
// As a bonus assignment, modify your range function to take an optional third argument that indicates
// the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
// ---------------------------------------------------
// Note: it's possible to make calculations for default parameter.
function range(start, end, step = start < end ? 1 : -1) {
    if (step === 0) {
        return [];
    }
    
    let res = [];
    // Instead of doing 2 loops(when step > 0 and step < 0), we can create condition function depending on step.
    let conditionFunc = step > 0
        ? (i) => i <= end
        : (i) => i >= end;
    
    for (let i = start; conditionFunc(i); i += step) {
        res.push(i);
    }
    
    return res;
}

function sum(arr) {
    return arr.reduce((total, x) => total + x, 0);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 15
console.log(sum([1, 2, 3, 4, 5]));

// [0, 2]
console.log(range(0, 3, 2));
// [5, 4, 3, 2]
console.log(range(5, 2, -1));

// 55
console.log(sum(range(1, 10)));
// 6
console.log(sum(range(0, 3)));
// 6
console.log(sum(range(1, 3)));
// 0
console.log(sum(range(0, 0)));
// 0
console.log(sum(range(0, 0, 0)));
// 0
console.log(sum(range(10, 0, 1)));
// 55
console.log(sum(range(10, 0, -1)));
// 0
console.log(sum(range(0, 10, -1)));
// -55
console.log(sum(range(0, -10, -1)));
