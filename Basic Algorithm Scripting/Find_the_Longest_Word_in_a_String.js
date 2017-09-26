// Problem Explanation:

    // You have to go through each word and figure out which one is the longest and return not the word,
// but how many characters it has.

// Hint: 1
// You should split the string into an array of words
//
// Hint: 2
// You will need to figure out a way to keep track globally of the greatest current length.

// Hint: 3
// Remember how to get the length of elements on the array? Array[index].length.


// Basic Code Solution:
    function findLongestWord(str) {
        var words = str.split(' ');
        var maxLength = 0;

        for (var i = 0; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
            }
        }

        return maxLength;
    }


findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("The quick brown fox jumped over the lazy dog");// should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog");// should return 6.
findLongestWord("May the force be with you");// should return 5.
findLongestWord("Google do a barrel roll");// should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow");// should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology");// should return 19.

// Code Explanation:
//
//     Take the string and convert it into an array of words. Declare a variable to keep track of the
// maximum length and loop from 0 to the length of the array of words.
//
//     Then check for the longest word by comparing the current word to the previous one and storing the
// new longest word. At the end of the loop just return the number value of the variable maxLength.

// Intermediate Code Solution:
//     Using .reduce()

function findLongestWord(s) {
    return s.split(' ')
        .reduce(function(x, y) {
            return Math.max(x, y.length)
        }, 0);
}

// Code Explanation:
//
// In case you're wondering about that 0 after the callback function, it is used to give an initial value
// to the x, so that Math.max will know where to start.

// Advanced Code Solution:
//     Using recursiveness

function findLongestWord(str) {

    //split the string into individual words
    //(important!!, you'll see why later)
    str = str.split(" ");

    //str only has 1 element left that is the longest element,
    //return the length of that element
    if(str.length == 1){
        return str[0].length;
    }

    //if the first element's length is greater than the second element's (or equal)
    //remove the second element and recursively call the function)
    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWord(str.join(" "));
    }

    //if the second element's length is greater thant the first element's start
    //call the function past the first element
    if(str[0].length <= str[1].length){
        // from the first element to the last element inclusive.
        return findLongestWord(str.slice(1,str.length).join(" "));
    }
}

// Code Explanation:

    // The first line splits the string into individual words. Then we check if str only has 1 element
// left then that is the longest element and we return it. If the first element's length is greater
// than the second element's (or equal), we remove the second element and recursively call the function
// findLongestWord. However, if the second element's length is greater thant the first element's start,
// then we call the function past the first element.

//my solution

function findLongestWord(str) {
    var arr = [''];
    arr = str.split(' ');

    var currentLength;
    var maxLength = 0;
    for(var i = 0;i < arr.length;i++)
    {
        currentLength = arr[i].length;
        if(maxLength < currentLength)
        {
            maxLength = currentLength;

        }
    }
    return (maxLength);
}

