// Problem Explanation:
//
//     Our goal for solving this problem is tidying up the string passed in, and checking whether it is
// in fact a palindrome.
//
//     If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the
// same thing forwards or backwards. A simple example is mom, when you reverse the letters, it spells the
// same thing! Another example of a palindrome is race car. When we take out anything that is not a
// character it becomes racecar which is the same spelled forwards or backwards!
//     Once we have determined whether it is a palindrome or not we want to return either true or false
// based on our findings.

//     Hint: 1
// Regular expressions, RegEx, can be used to remove unwanted characters from the string.
//     Hint: 2
// The Array.prototype.split and Array.prototype.join methods can be of use here. For and while loops
// are another alternative, or why not even map!
//     Hint: 3
// String.prototype.toLowerCase can be used to make a string lowercase.

// Basic Code Solution:
    function palindrome(str) {
        return str.replace(/[\W_]/g, '').toLowerCase() ===
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }

palindrome("A man, a plan, a canal. Panama");
palindrome("eye"); // should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.
// Code Explanation:
//
//     We start by using regular expressions to replace any white space or non-alphanumeric characters
// with nothing (or null), which essentially removes them from the string.
//
//     Next we chain .toLowerCase() to remove any capital letters because A is a different character
// than a. The problem did not ask us to worry about making sure the case of the characters was identical,
// just the spelling.
//
//     Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back
// together.
//
//     Last step is to check that the string is the same forwards and backwards and return our result!

// Intermediate Code Solution:

    function palindrome(str) {
        str = str.toLowerCase().replace(/[\W_]/g, '');
        for(var i = 0, len = str.length - 1; i < len/2; i++) {
            if(str[i] !== str[len-i]) {
                return false;
            }
        }
        return true;
    }

// Code Explanation:
//
//     We start by using the same methods of replacing characters we don't want in the string using
// RegEx's, regular expressions, and then make our string lowercase.
//
//     Next we set up our for loop and declare an index i to keep track of the loop. We set our
// escape sequence to when i is greater than the length of the string divided by two, which tells the
// loop to stop after the halfway point of the string. And finally we set i to increment after every
// loop.
//
//     Inside of each loop we want to check that the letter in element [i] is equal to the letter in
// the length of the string minus i, [str.length - i]. Each loop, the element that is checked on both
// sides of the string moves closer to the center until we have checked all of the letters. If at any
// point the letters do not match, we return false. If the loop completes successfully, it means we
// have a palindrome and therefore we return true!
//

// Advanced Code Solution (most performant):

//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
    //assign a front and a back pointer
    let front = 0;
    let back = str.length - 1;

    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        while ( str[front].match(/[\W_]/) ) {
            front++;
            continue;
        }
        //decrements back pointer if current character doesn't meet criteria
        while ( str[back].match(/[\W_]/) ) {
            back--;
            continue;
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++;
        back--;
    }

    //if the whole string has been compared without returning false, it's a palindrome!
    return true;

}

// Code Explanation:
//
//     I was given this problem in an interview (spoiler: I wasn't hired :frowning: ) I quickly arrived
// at the basic solution, and the interviewer told me to make it better. The algorithm would take way
// too long if he passed the Bible as the string. He wanted it to be instant.
//
// The simpler solutions perform very poorly on long strings because they operate on the whole string
// multiple times (toLowerCase(), replace(), split(), reverse(), join()) before comparing the whole
// string twice.
//
//     The beauty of this solution is it never needs to read through the whole string, even once, to
// know that it's not a palindrome. Why read through the whole string if you can tell that it's not a
// palindrome just by looking at two letters?
//
//     Uses a while loop instead of a for loop as a best practice - because we are using two variables,
// one is the index starting from the beginning of the string, and the other starts at the end of the
// string.




//my solution
function palindrome(str) {
    var rem = /[\W_]/g; //do regexp
    var strToLowReg = str.toLowerCase().replace(rem,'');//
    //                       or        .replace(/[\W_]/g,'');

    var strReverse = strToLowReg.split('').reverse().join('');

    if(strReverse === strToLowReg){
        return true;
    }else
    return false;
}

//another way

function palindrome(str) {
 var rem = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(rem, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
