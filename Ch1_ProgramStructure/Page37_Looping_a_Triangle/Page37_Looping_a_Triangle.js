// ---------------------------------------------------
// Write a loop that makes seven calls to console.log to output triangle of hashtags.
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ---------------------------------------------------
function hashtagsTriangle() {
    for (let i = 1; i <= 7; i++) {
        console.log('#'.repeat(i));
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
hashtagsTriangle();