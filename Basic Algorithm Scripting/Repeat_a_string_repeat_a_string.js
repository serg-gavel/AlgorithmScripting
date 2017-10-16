// Problem Explanation:
//
//     The program is very simple, we have to take a variable and return that variable being repeated
// certain amount of times. No need to add space or anything, just keep repeating it into one single
// string.
//
// Global String Object67
// Hint: 1
// You can’t edit strings, you will need to create a variable to store the new string.
//
// Hint: 2
// Create a loop to repeat the code as many times as needed.
//
// Hint: 3
// Make the variable created store the current value and append the word to it.

// Basic Code Solution:
    function repeatStringNumTimes(str, num) {
        if(num>0){
            return str.repeat(num);
        }
        return "";
    }

// Code Explanation:
//
//     Create an empty string variable to store the repeated word.
//     Use a while loop or for loop to repeat code as many times as needed according to num
// Then we just have to add the string to the variable created on step one, and increase or decrease
// num depending on how you set the loop.
//     At the end of the loop, return the variable for the repeated word.

// Intermediate Code Solution:
    function repeatStringNumTimes(str, num) {
        if(num < 0)
            return "";
        if(num === 1)
            return str;
        else
            return str + repeatStringNumTimes(str, num - 1);
    }

// Code Explanation:
//
//     This solution uses recursion.
//     We check if num is negative and return an empty string if true.
//     Then we check if it’s equal to 1 and in that case we return the string itself.
//     If not, we add the string to a call of our function with num being decreased by 1,
// which will add another str and another… until eventually num is 1. And return that whole process.

// Advanced Code Solution:
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str.repeat(num) : '';
    }

repeatStringNumTimes("abc", 3);

// Code Explanation:
//
//     This solution takes a declarative approach.
//     It is similar to the third solution, except it uses the ternary operator form of the if statement.

//my solution
function repeatStringNumTimes(str, num) {
    if (num <= 0)
        num = false;
    return str.repeat(num);
}

repeatStringNumTimes("abc", 10);
repeatStringNumTimes("*", 3); // should return "***".
repeatStringNumTimes("abc", 3); // should return "abcabcabc".
repeatStringNumTimes("abc", 4); // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); // should return "abc".
repeatStringNumTimes("*", 8); // should return "********".
repeatStringNumTimes("abc", -2); // should return ""