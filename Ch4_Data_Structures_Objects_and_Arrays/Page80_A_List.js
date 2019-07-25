// ---------------------------------------------------
// Write a function "arrayToList "that builds up a list structure like the one shown
//     when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list.
//
// Then add a helper function "prepend", which takes an element and a list and creates a new list
//     that adds the element to the front of the input list.
//
// And "nth", which takes a list and a number and returns the element at the given position in
//     the list (with zero referring to the first element) or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of "nth".
// ---------------------------------------------------
function arrayToList(arr) {
    if (arr.length === 0) {
        return {};
    }
    
    let list = {};
    let curListNode = list;
    for (let i = 0; i < arr.length; i++) {
        curListNode.value = arr[i];
        curListNode.rest = (i + 1 < arr.length) ? {} : null;
        curListNode = curListNode.rest;
    }
    
    return list;
}

function listToArray(list) {
    if (list == null) {
        return [];
    }
    
    let curListNode = list,
        arr = [];
    
    while (curListNode != null) {
        arr.push(curListNode.value);
        curListNode = curListNode.rest;
    }
    
    return arr;
}

function prepend(firstValue, list) {
    return {
        value: firstValue,
        rest: list
    };
}

function nth(list, n) {
    let curListNode = list;
    for (let i = 0; i < n; i++) {
        if (curListNode == null) {
            return undefined;
        }
        
        curListNode = curListNode.rest;
    }
    return curListNode == null ? undefined : curListNode;
}

function  nthRecursive(list, n) {
    if (list == null) {
        return undefined;
    } else if (n === 0) {
        return list;
    }
    
    return nthRecursive(list.rest, n - 1);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// List 1,2,3,4
console.log(JSON.stringify(arrayToList([1, 2, 3, 4])));

// [1, 2, 3, 4]
console.log(listToArray(arrayToList([1, 2, 3, 4])));

// [4, 8, 15, 16, 23, 42]
console.log(listToArray(arrayToList(listToArray(arrayToList([4, 8, 15, 16, 23, 42])))));


console.log('\nTesting nth');
// 1-st node
console.log(nth(arrayToList([1, 2, 3, 4]), 0));
// last node
console.log(nth(arrayToList([1, 2, 3, 4]), 3));
// undefined
console.log(nth(arrayToList([1, 2, 3, 4]), 4));
// undefined
console.log(nth(arrayToList([1, 2, 3, 4]), 5));


console.log('\nTesting nthRecursive');
// 1-st node
console.log(nthRecursive(arrayToList([1, 2, 3, 4]), 0));
// last node
console.log(nthRecursive(arrayToList([1, 2, 3, 4]), 3));
// undefined
console.log(nthRecursive(arrayToList([1, 2, 3, 4]), 4));
// undefined
console.log(nthRecursive(arrayToList([1, 2, 3, 4]), 5));