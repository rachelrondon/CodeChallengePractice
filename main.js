// Code Challenge Questions

 // 1. Print the sum of the array's elements as a single integer

    // Sample Input:
    // 6
    // 1 2 3 4 10 11

    // Sample Output
      // 31

    // Solution:

    let theArray = [1, 2, 3, 4, 10, 11];
    let sum = 0;

    for (i = 0; i < theArray.length; i++) {
      sum += theArray[i];
    }

    console.log(sum);

    // += means sum = sum + theArray[i];

    // 2. IS UNIQUE: Implement an algorithm to determine if a string has all unique characters.
    // Bonus: What is you cannot use additional data structures?
    // Hints: #44, #117, #132

    boolean isUniqueChars(String str) {
      if (str.length() > 128) return false;

      boolean[] char_set = new boolean[128];
      for (int i = 0; i < str.length(); i++) {
        int val = str.charAt(i);
        if (char_set[val]) {
          return false;
        }
        char_set[val] = true;
      }
      return true;
    }
//  You can also solve this problem by comparing each character of the string to every other character of the string //


    // CharAt()
    // This returns the specified character from a string


  // Question 3: Check Permutation
  // Given two strings, write a method to decide if one is a permutation of the other
  // Hints: #1, #84, #122, #131

  // Permutation : A rearrangement of the elements of an ordered list
  // Two strings that are permutations should have the same characters; but in different orders.

    // Questions to ask the interviewer:
      // 1. Is the permutation case sensitive.
            //is God a permutation of dog?
      // 2. Is white space significant ?

    // Solution 1: Sort the strings and then compare them.
    // Solution 2: Check if the two strings have identical character counts
    // Iterate through the code and count how many times each character appears
    // Then compare the two arrays

    // Permutation definition: Two words with the same character count


// Question 4: URLify
// Write a method to replace all spaces in a string with '%20'.
//  You may assume that the string has sufficient space at the end to hold the additional characters,
//  and that you are given the "true" length of the string.

Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"

// My solution; This only replaces the first white space and not all of the white spaces //
var theString = "Mr John Smith    "
the.String.replace(" ", "%20");


module.exports = Strings_1_3 = (function() {
  return {
    // Generate URL freindly strings of a specified length
    // Solution #3 from the book.
    // @param {String} s - Standard string with potential trailing whitespace
    // @param {Number} l - The "true" length of the string
    // @retuns {String} - A URL freindly string of the specified length
    URLify: function(s, l) {
      var newString = '';
      for (var i = 0; i < l; i++) {
        if (s.charAt(i) === ' '){
          newString += '%20';
        }else{
          newString += s.charAt(i);
        }
      }
      return newString;
    }
  };
}());


// You can use the indexOf method to locate the empty spaces.


// Question 5: One Away
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit(or zero edits away);

// Solution:

function isOneOrLessAway(str1, str2) {
  // First we will check to see if the lengths differ more than 1.
  // If the lengths of the strings differ more than one than is has to be false
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // Here isEdited is defined as false
  let isEdited = false;

  // Here there is an iteration through both strings.
  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
  // Here there is a check to see if the iterations of the two strings equal each other
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // second edit
        return false;
      }

      if (str1.length > str2.length) {
        --j; // decrease j, we are deleting char from str1
      }
      else if (str1.length < str2.length) {
        --i; // decrease i, we are deleting char from str2
      }
      isEdited = true;
    }
  }

  return true;
}

isOneOrLessAway("pale", "ple");


// Question 6:
// Implement a method to perform a basic string compression using the counts of repeated characters.

// For example, the string aabcccccaaa will become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string
// You can assume the string has only uppercase and lowercase letters(a - z)
// Hints #92
// Hints #110

// Hint 92: Do the easy thing first. Compress the string, the compare the lengths.

// Hint 110: Be careful that you are not repeatedly concatenating strings together. This can be very inefficient.


// Write a method and returns a smaller string
// The smaller string will return the count and the character
// Define the variables count and character
// Define a counter



stringCompression function(str) {
}


// Question 7:

// Rotate Matrix:
// Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90%. Can you do this in place?

rotateMatrix function(matrix) {
  // if the input does not equal matrix, or the length of the matrix string is equal to zero, or the length of the matrix string does not equal the length of matrix at index zero then return 'invalid matrix';
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    // return "invalid matrix";
    return ('invalid matrix');
  }
  // If the length of matrix is less than 2 then return the matrix string.
  if (matrix.length < 2) {
    return matrix;
  }

// The variable len as matrix.length - 1
  let len = matrix.length - 1,
// One half of the length is determined by dividing the length of the matrix by two
// Math.floor will only return a full number
  half = Math.floor(matrix.length / 2);

// Here there is a loop through the x axis
  for (let i = 0; i < len - (start * 2); ++ i ) {
    // The start condition is i = 0; the end condition is i is less than len (matrix.length - 1) minus start times two
    // Every time there is an iteration, i increases by one
    let y = start,
    // the variable y is declared as defined as start
    x = start + i,
    // x is declared and defined by start + i
    prev = matrix[y][x];
    // prev is declared and defined as matrix[y][x];

  // Here is a loop through all four corners
    for (let j = 0; i < 4; ++j) {
  // the variable nextY is declared and defined as x
      let nextY = x,
  // the variable next is defined as matrix[nextY][nextX]
      next = matrix[nextY][nextX];
  // matrix[nextY][nextX] is also defined as prev
    matrix[nextY][nextX] = prev;
  // prev is set to the equivalent of next
    prev = next;
  // the variable x is defined as nextX
    x = nextX;
  // the variable y is defined as nextY
    y = nextY;
    }
  }
}

// return matrix
return matrix;

}
