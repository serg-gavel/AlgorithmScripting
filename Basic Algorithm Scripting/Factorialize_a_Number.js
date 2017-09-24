// Problem Explanation:
//     Return the factorial of the provided integer. If the integer is
// represented with the letter n, a factorial is the product of all
// positive integers less than or equal to n.
//
//     Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//beginner solution Code Solution:
function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
}

factorialize(5);
factorialize(5); //should return a number.
factorialize(5); //should return 120.
factorialize(10); //should return 3628800.
factorialize(20); //should return 2432902008176640000.
factorialize(0); //should return 1.

// Code Explanation:
    // Notice at the first line we have the terminal condition, i.e a condition to check the end of the
// recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the
// stack to propagate this value to the upper levels. If we do not have this condition, the recursion
// would go on until the stack space gets consumed

//my solution
function factorialize(n) {
    if (n){
        return n * factorialize(n - 1);
    }else{
        return 1;
    }
}

// another way

function factorialize(n) {
  return n ? n * factorialize(n - 1) : 1;
}

// Understanding recursion

// Recursion refers to a function repeating (calling) itself. In this case we are basically returning
// the given number (i.e. 5), multiplied by the function itself but this time the value passed to the
// num parameter is num-1 (which initially translates to 4). The very function is going to run inside
// itself interesting, eh?
//
// Understanding the flow
//
// The first returned value can be visualized better if you think about those parenthesis operations
// you did in secondary school where you do the math inside every parenthesis from inside out, bracket
// and square bracket until you get a final result (a total). This time it's the same thing, look at the
// program flow:
//
// During the first execution of the function:
//
// [num = 5]
//
// Is 5 equal to 1 or 0? No ---> Oki doki, let's continue...
//
// Returns:
//
//     (5 (second execution_: 4 (third execution_: 3 (fourth execution_: 2 _fifth execution: 1))))
//
// What it returns can be viewed as (5*(4*(3*(2*1)))) or just 5 * 4 * 3 * 2 * 1, and the function will
// return the result of that operation: 120. Now, let's check what the rest of the executions do:
//
// During the rest of the executions:
//
//     Second Execution: num = 5-1 = 4 -> is num 0 or 1? No
//
//     --> return the multiplication between 4 and the next result when num is now 4-1.
//
// Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? No
//
//     --> return the multiplication between 3 and the next result when num is now 3-1.
//
// Fourth Execution: num = 3-1 = 2 -> is num 0 or 1? No
//
//     --> return the multiplication between 2 and the next result when num is now 2-1.
//
// Fifth Execution: num = 2-1 = 1 -> is num 0 or 1? Yep
//
//     --> return 1. And this is where the recursion stops because there are no more executions.