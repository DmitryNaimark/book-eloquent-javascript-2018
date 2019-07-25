// ---------------------------------------------------
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the
// same elements in the inverse order.
//
// The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.
// ---------------------------------------------------
function reverseArray(arr) {
    // If we know the resulting array's length beforehand, it's faster to set it immediately,
    // instead of pushing each item into array.
    let arrReversed = Array(arr.length);
    
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        arrReversed[j] = arr[i];
    }
    
    return arrReversed;
}

function reverseArrayInPlace(arr) {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3, 4, 5]));

let arr = [1,2,3,4,5];
reverseArrayInPlace(arr);
// [5, 4, 3, 2, 1]
console.log(arr);