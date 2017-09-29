// Problem Explanation:
//
//     Remove all falsy values from an array.
//
//
// Falsy Values
//     Hint: 1
// Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript:
// undefined, null, NaN, 0, "" (empty string), and false of course.
//
//     Hint: 2
// We need to make sure we have all the falsy values to compare, we can know it, maybe with a function
// with all the falsy values...
//
//     Hint: 3
// Then we need to add a filter() with the falsy values function...

// Advanced Code Solution:

    function bouncer(arr) {
        return arr.filter(Boolean);
    }

// Code Explanation:
//
//     The Array.prototype.filter method expects a function that returns a Boolean value which takes
// a single argument and returns true for truthy value or false for falsy value. Hence we pass the
// built-in Boolean function.

// my solution
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
bouncer([1, null, NaN, 2, undefined]); // should return [1, 2].