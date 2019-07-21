// ---------------------------------------------------
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the string.
//
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
//
// Rewrite countBs to make use of this new function.
// ---------------------------------------------------
function countChar(str, charToFind) {
    let charCount = 0;
    for (let ch of str) {
        if (ch === charToFind) {
            charCount++;
        }
    }
    
    return charCount;
}

function countBs(str) {
    return countChar(str, 'B');
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(countBs("Hey, Billy Bob. I'll be right back"));