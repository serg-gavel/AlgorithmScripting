// Problem Explanation:
//
//     Return true if the string in the first element of the array contains all of the letters of the
// string in the second element of the array…
//
// String.indexOf()
// Hint: 1
// If everything is lowercase it will be easier to compare.
// Hint: 2
// Our strings might be easier to work with if they were arrays of characters.
// Hint: 3
// A loop might help. Use indexOf() to check if the letter of the second word is on the first.

// Basic Code Solution:
//     Procedural

function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) === -1)
            return false;
    }
    return true;
}
//
// Code Explanation:
//
//     First we make the two strings in the array lowercase. test will hold what we are looking for in
// target.
//     Then we loop through our test characters and if any of them is not found we return false.
//
//     If they are all found, the loop will finish without returning anything and we get to return true.

// Intermediate Code Solution:
//     Declarative

function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) !== -1;
        });
}

// Code Explanation:
//
//     Grab the second string, lowercase and turn it into an array; then make sure every one of its
// letters is a part of the lowercased first string.
//
//     Every will basically give you letter by letter to compare, which we do by using indexOf on the
// first string. indexOf will give you -1 if the current letter is missing. We check that not to be the
// case, for if this happens even once every will be false.


//my solution
function mutation(arr) {
    //we must take char from arr2
    //and do "for" for all chars in the arr1, then next char from arr2 and compare
    //with all chars in arr1.
    //function return num of position from 0 to Infinity
    //if it return -1 the array is different.
    var cOne=arr[0].toLowerCase();
    var cTwo=arr[1].toLowerCase();
    var charX=0;
    var extracted=0;
    for(var i=1;i<=cTwo.length;i++)
    {
        charX=cTwo.slice(i-1,i);
        extracted=cOne.indexOf(charX);
        if(extracted===-1)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "hey"]); // should return false.
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
