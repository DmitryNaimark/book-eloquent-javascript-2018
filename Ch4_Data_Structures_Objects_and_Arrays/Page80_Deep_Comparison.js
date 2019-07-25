// ---------------------------------------------------
// Write a function deepEqual that takes two values and returns true only if they
//     are the same value or are objects with the same properties,
//     where the values of the properties are equal when compared with a recursive call to deepEqual.
//
// To find out whether values should be compared directly (use the === operator for that) or have
//     their properties compared, you can use the typeof operator.
//
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical accident,
//     typeof null also produces "object".
//
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.
// ---------------------------------------------------
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    // If one of the objects is null, while the other isn't.
    // This will also handle that "typeof null" is "object".
    if (obj1 === null || obj2 === null) {
        return false;
    }
    // If object's types are not the same.
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        let obj1keys = Object.keys(obj1),
            obj2keys = Object.keys(obj2);
        
        if (obj1keys.length !== obj2keys.length) {
            return false;
        }
        for (let i = 0; i < obj1keys.length; i++) {
            if (!deepEqual(obj1[obj1keys[i]], obj2[obj2keys[i]])) {
                return false;
            }
        }
        
        return true;
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let obj1 = {
    a: 1,
    b: 2,
    str: 'some string',
    bool: false,
    und: undefined,
    nl: null,
    nested: {
        a: 10,
        b: 20,
        nested: {}
    }
};
let obj2 = {
    a: 1,
    b: 2,
    str: 'some string',
    bool: false,
    und: undefined,
    nl: null,
    nested: {
        a: 10,
        b: 20,
        nested: {}
    }
};
// true
console.log(deepEqual(obj1, obj2));

obj2.nested.nested = null;
// false
console.log(deepEqual(obj1, obj2));

// false
console.log(deepEqual([], {}));