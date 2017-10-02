// Problem Explanation:
//
//     The function is a whole Boolean operation. You need to return true if the first argument ends
// with the second argument. This means that for the problem script, it should return true for the
// confirmEnding('Bastian', 'n'); case.
//
//
// str.substr()

// Hint: 1
// Take a look at how substr() works. You will be trying to get the last Nth characters.
//
// Hint: 2
// To get the Nth-to-Last character you will use length() and turn it into a negative number.
//
// Hint: 3
// Check that you have the proper syntax and that you use === to compare.

// Basic Code Solution:
    function confirmEnding(str, target) {
        return str.substr(-target.length) === target;
    }
// Code Explanation:
//
//     The substr() method returns the characters in a string beginning at the specified location through
// the optional specified number of characters. substr operates through the end of the string if the
// second optional parameter is not specified. substr() calculates the index of first matching character
// from the string's end if the specified location is negative. Using the - operator in front of
// target.length makes it negative.
//
// We use the method substr() with the negative value of target's length to extract the ending segment
// of str of the same size as target, compare it to target, and then return the value of this boolean
// expression.



//my solution
function confirmEnding(str, target) {

    if (str.substring(str.length - target.length) === target)
        return true;
    return false;
}

confirmEnding("Bastian", "n");

confirmEnding("Bastian", "n"); // should return true.
confirmEnding("Connor", "n"); // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // should return false.
confirmEnding("He has to give me a new name", "name"); // should return true.
confirmEnding("Open sesame", "same"); // should return true.
confirmEnding("Open sesame", "pen"); // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // should return false.
    // Do not use the built-in method .endsWith() to solve the challenge.