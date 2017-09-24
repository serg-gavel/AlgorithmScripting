// Problem Explanation:
// We need to take the string and reverse it, so if it originally reads 'hello', it will now read 'olleh'.
// We will need to split the string, and therefore we will be working with Arrays as well.


function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

reverseString("hello"); //should return a string.
reverseString("hello"); //should become "olleh".
reverseString("Howdy"); //should become "ydwoH".
reverseString("Greetings from Earth"); //should return "htraE morf sgniteerG"

// Code Explanation:
//Our goal is to take the input, str, and return it in reverse. Our first step is to split
// the string by characters using split(''). Notice that we don't leave anything in between
// the single quotes, this tells the function to split the string by each character.
//
// Using the split() function will turn our string into an array of characters,
// keep that in mind as we move forward.
//
//     Next we chain the reverse() function, which takes our array of characters and reverses them.
//
//     Finally, we chain join('') to put our characters back together into a string.
// Notice once again that we left no spaces in the argument for join, this makes sure that the array
// of characters is joined back together by each character.