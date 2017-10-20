// Problem Explanation:
//
//     This can be a tricky problem to understand. You need to find where in the array a number should
// be inserted by order, and return the index where it should go.
//
//
// JS Array Sort
// Hint: 1
// The first thing to do is sort the array from lower to bigger, just to make the code easier. This is
// where sort comes in, it needs a callback function so you have to create it.
//
// Hint: 2
// Once the array is sorted, then just check for the first number that is bigger and return the index.
//
// Hint: 3
// If there is no index for that number then you will have to deal with that case too.


// Basic Code Solution:

    function getIndexToIns(arr, num) {
        arr.sort(function(a, b) {
            return a - b;
        });

        for (var a = 0; a < arr.length; a++) {
            if (arr[a] >= num)
                return a;
        }

        return arr.length;
    }

// Code Explanation:
//     First I sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from left
// to right.
//     Then I use a for loop to compare the items in the array starting from the smallest one. When an
// item on the array is greater than the number we are comparing against, then we return the index as
// an integer.

// parseInt()

 // Basic Code Solution:
    function getIndexToIns(arr, num) {
        // Find my place in this sorted array.
        var times = arr.length; // runs the for loop once for each thing in the array
        var count = 0;
        for (i=0;i<times;i++){
            if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
        return count; // the above equals num's position in a sorted array
    }

getIndexToIns([40, 60], 50);
//
// Code Explanation:
//     I do not sort the arr input array
// I run a for loop counting whenever the num input is bigger than an arr input number.
//     This number is equivalent to what num's position would be in a sorted array.
//  Basic Code Solution:

function getIndexToIns(arr, num) {

    arr.sort(function(a, b) {
        return a - b;
    });

    var i = 0;
    while (num > arr[i]) {
        i++;
    }

    return i;
}

getIndexToIns([40, 60], 50);

// Code Explanation:
//     Sort existing array.
//     Iterate through the array while checking if num is bigger.
//     The loop will stop when num isn't bigger than i and return the last element checked.
//  Intermediate Code Solution:

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
}
//
// Code Explanation:
//     First we add the number num to the array using push() which adds it as the last element of the
// array.
//     Then we use sort() with the callback function function(a, b){return a-b} to sort the numbers
// in ascending order.
//     Lastly we return the postion or index of num in the array with the indexOf() function.

// push()
// sort()
// indexOf()
// Intermediate Code Solution:
//     Using .findIndex()

function getIndexToIns(arr, num) {
    // sort and find right index
    var index = arr.sort((curr, next) => curr > next)
.findIndex((currNum)=> num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

// Code Explanation:
//     First sort the array in ascending order, this is currently done using array functions for minimal
// footprint.
//     Once the array it is sorted, we directly apply the .findIndex() where we are going to compare
// every element in the array until we find where num <= currNum meaning where the number we want to
// insert is less or equal to the current number number in the iteration.
//     Then we use ternary operations to check whether we got an index returned or -1. We only get -1
// when the index was not found meaning when we get a false for all elements int he array, and for
// such case, it would mean that num should be inserted at the end of the list hence why we use
// arr.length.
//
// Array.findIndex()
// Arrow Functions
// Ternary Operator

// Advanced Code Solution:

function getIndexToIns(arr, num) {

    return arr.concat(num).sort((a,b) => a-b).indexOf(num);

}

getIndexToIns([1,3,4],2);
//
// Code Explanation:
//     We use method-chaining to invoke one method after another to solve the problem in a single line.
// First we merge arr and num by invoking the arr.concat(num) method
// Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in
// ascending order
// Lastly we return the postion or index of num in the array with the indexOf() method



//my solution
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a, b) {
        return a - b;
    });
    if(num<=arr[0]){
        return 0;
    }else if(arr[arr.length-1]<num){
        return (arr.length);
    }

    for(var a=arr.length;a>=0;a--)
    {
        if(num >= arr[a-1] && num === arr[a])
        {
            return a;
        }
        else if(num > arr[a-1] && num < arr[a])
        {
            return a;
        }
    }

}
getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
getIndexToIns([40, 60], 50); // should return 1.
getIndexToIns([3, 10, 5], 3); // should return 0.
getIndexToIns([5, 3, 20, 3], 5); // should return 2.
getIndexToIns([2, 20, 10], 19); // should return 2.
getIndexToIns([2, 5, 10], 15); // should return 3.; //