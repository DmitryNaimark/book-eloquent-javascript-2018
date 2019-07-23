// ---------------------------------------------------
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//
// When you have a program that generates this pattern, define a binding size = 8 and change
// the program so that it works for any size, outputting a grid of the given width and height.
// ---------------------------------------------------
function chessboard(size) {
    let oddString = '',
        evenString = '';
    
    // By creating "evenString" and "oddString", we decrease Runtime Complexity.
    // Since we will concatenate the whole string, instead of character by character.
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            evenString += ' ';
            oddString += '#';
        } else {
            evenString += '#';
            oddString += ' ';
        }
    }
    evenString += '\n';
    oddString += '\n';
    
    let resString = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            resString += evenString;
        } else {
            resString += oddString;
        }
    }
    
    return resString;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(chessboard(8));
console.log(chessboard(4));
console.log(chessboard(3));
console.log(chessboard(1));
console.log(chessboard(0));