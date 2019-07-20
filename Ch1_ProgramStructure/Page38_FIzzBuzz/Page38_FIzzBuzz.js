// ---------------------------------------------------
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// ---------------------------------------------------
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let isDivisableBy3 = (i % 3 === 0),
            isDivisableBy5 = (i % 5 === 0);
        
        if (isDivisableBy3 && isDivisableBy5) {
            console.log('FizzBuzz');
        } else if (isDivisableBy3) {
            console.log('Fizz')
        } else if (isDivisableBy5) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    }
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
fizzBuzz();