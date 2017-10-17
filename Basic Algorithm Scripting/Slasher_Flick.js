// Problem Explanation:
//
//     For example: slasher([1, 2, 3], 2); must return [3].
//
//
// JS Array Prototype Splice
// JS Array Prototype Slice
// Hint: 1
// We need only the remaining part of an array, so we can just remove what we don't.
// Hint: 2
// splice() function can be used.
// Hint: 3
// slice() function can be used.

// Basic Code Solution:

    function slasher(arr, howMany) {
        // remove the head
        arr.splice(0, howMany);
        // return the remaining or the tail
        return arr;
    }
slasher([1, 2, 3], 2);

// Code Explanation:
//
//     This solution uses the splice() function.
// First argument, arr is the array to be modified.
//     Second argument, howMany is the number of elements to be removed starting with arr[0].
//     Modify the array with splice() and return it.

 // Intermediate Code Solution:

    function slasher(arr, howMany) {

        // Return string after the amount chopped off.
        return arr.slice(howMany);

    }

// Code Explanation:
//
//     This solution uses the slice() function.
// The argument howMany is the number of elements to be removed starting with arr[0].
//     Modify the array with slice() and return it.

//my solution
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

// delete index from beginning
slasher([1, 2, 3], 2); // should return [3].
slasher([1, 2, 3], 0); // should return [1, 2, 3].
slasher([1, 2, 3], 9); // should return [].
slasher([1, 2, 3], 4); // should return [].
slasher(["burgers", "fries", "shake"], 1); // should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // should return ["cheese", 4].
