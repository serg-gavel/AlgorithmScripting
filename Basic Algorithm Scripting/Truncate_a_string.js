// Problem Explanation:
//
//     We need to reduce the length of the string or truncate it if it is longer than the given maximum
// lengths specified and add ... to the end. If it is not that long then we keep it as is.
//
//
// String.prototype.slice()

// Hint: 1
// Strings are immutable in JavaScript so we will need a new variable to store the truncated string.
//
// Hint: 2
// You will need to use the slice() method and specify where to start and where to stop.
//
// Hint: 3
// Do not forget that when we truncate the word, we also must count the length added by ...

// Basic Code Solution:

    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num && num > 3) {
            return str.slice(0, (num - 3)) + '...';
        } else if (str.length > num && num <= 3) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }

    }
//
// Code Explanation:
//
//     First we start off with a simple if statement to determine one of three outcomes…
// If our string length is greater than the num we want to truncate at, and our truncate point is at
// least three characters or more into the string, we return a slice of our string starting at character
// 0, and ending at num - 3. We then append our '...' to the end of the string.
//     However, if our string length is greater than the num but num is within the first three characters,
// we don’t have to count our dots as characters. Therefore, we return the same string as above, with one
// difference: The endpoint of our slice is now just num.
//     Finally, if none of the above situations are true, it means our string length is less than our
// truncation num. Therefore, we can just return the string.


// Advanced Code Solution:

    function truncateString(str, num) {
        if (str.length > num)
            return str.slice(0, num > 3 ? num-3 : num) + '...';
        return str;
    }

// Code Explanation:
//
//     We start by writing an if-statement that checks if the length of the string in the first
// argument is greater than the size limit. If so we need to use the “slice” method to extract a
// section of the string and return it as a new string. Here we pass 0 as the starting point for our
// slice. To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. In our ternary,
// if num is larger than 3, we must factor in the three dots to our total length, and thus we end our
// slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num.
// Finally, the '...' is appended to the end of our new string and is returned.function.
// if (str.length > num)
// return str.slice(0, num > 3 ? num-3 : num) + '...';
// If our if statement above fails, the program will skip over it including the return statement.
// In this case we are able to skip a follow-up “else” statement and return the original string.
//     return str;
// NOTE In order to understand the above code, you need to understand how a Ternary Operator works.
// The Ternary Operator is frequently used as a shortcut for the if statement and follows this format:
// condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value
// of expr1. Otherwise, it returns the value of expr2.

//my solution
function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}
//alternate way

 function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
truncateString("Lol", 3);
truncateString("A-tisket a-tasket A green and yellow basket", 11); // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14); // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); // should return "A...".
truncateString("Absolutely Longer", 2); // should return "Ab...".