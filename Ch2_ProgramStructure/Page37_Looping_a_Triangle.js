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

function hashtagsTriangle2() {
    for (let str = '#'; str.length < 8; str += '#') {
        console.log(str);
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
hashtagsTriangle();
hashtagsTriangle2();