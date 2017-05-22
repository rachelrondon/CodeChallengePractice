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


// Code Challenge - Count The Digit

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// this is an integer
n (n >= 0)
// this is a digit
d (0 <= d <= 9)



// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the number of digits d used in the writing of all the K**2.






// Question: Take a Ten Minute Walk
// press button = receive an array of one-letter strings representing directions to walk
// One minute = one block
// Create a function that will return TRUE if the walk the app gives you will take you exactly ten minutes
// Return false otherwise.

let array = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10'];

let goForAWalk = function(array) {
 if (array.length === 10) {
   return true;
 } else {
   return false;
 }
}

goForAWalk(array)

// Reverse String
// To solve a reverse string question, you can use a reverse for loop or the built in JavaScript methods, split, reverse, and join.
let str = 'Rachel';

let reverse = str.split('').reverse().join('');

reverse(str)


// The Supermarket Queue
// There is a queue for the self-checkout tills at the supermarket.
// Your task is to write a function to calculate the total time requireed for all the customers to check out!
// The function has two input variables:

let customers = [1,2,3,4,5,6];
// Each integer represents a customer and

let n = 2;
// n equals the number of checkout tills
// the function should return an integer; the total time required

// defining getSum and reducing the customers down to the sum of the array of integers.
let getSum = customers.reduce(function(prev, curr) {
  return prev + curr;
},0);

// defining groceryStoreLine and passing it getSum and the n
let groceryStoreLine = function(getSum, n) {
  return getSum / n;
}

groceryStoreLine(customers, n)


// Length of missing array
// You get an array of arrays
// If you sort the arrays by their length, you will see that thier
// length-values are consecutive
// But one array is missing

// You have to write a method that return the length of the missing array

let arr = [[1,2],[4,5,1,1], [1], [5,6,7,8,9]]

let sorted = arr.sort();

function getMissingArray(){

}

getMissingArray(arr)

// Technical Questions:

// What are the advantages of using JavaScript?
//   1. JavaScript is lightweight
//   JavaScript can be executed within the user's
//   brower without having to communicate with the server, saving on bandwidth.
//   2. JavaScript is versatile
//     JavaScript supports multiple programming paradigms.
//       - Object-oriented
//       - Imperative
//       - Functional programming
//       - Can be used on both front-end and server-side technologies
//
//   3. Sleek Interactivity
//     - Tasks can be completed within the browser without communicating with the server.
//     - JavaScript can create a smooth "desktop-like" experience for the end user
//
//   4. Rich Interfaces -
//     Numerous ways that JavaScript can be used to enhance a website/s UI/UX
//
//   5. Prototypal Inheritance -
//     Objects can inherit from other objects
//     This makes JavaScript simple, powerful, and great for dynamic applications
//
//
//     What are the disadvantages of using JavaScript?
//
//
//   - Explain the difference between classical inheritance and Prototypal inheritance
//
//
//   - What is a RESTful Web Service?
//   REST stands for Representational State Transer
//   - this is an architectural style that has largely been adopted
//   as a best practice for building web and mobile applications
//   - Designed to be lightweight, easy to maintain, and scalable.
//   - they are based on HTTP protocol and make explicit use of HTTP methods (GET, POST, PUT, DELETE)
//   - These are stateless (they do not hold memory)
//   - Transfer XML/JSON data between the server and the client



// Coding Question: Check if a string is a Palindrome

function checkPalindrom(str) {

  //.split will split a string into an array of substrings and return a new array
  // .reverse will reverse the array in place
  // .join will join all of the elements of an array into a string

  // first we take a sting and split it into an array of substrings.
  return str == str.split('').reverse().join('');
  // we are checking to see if the string equals the reverse of the string.
  // this is very similar to the question about how to reverse a string.
}

checkPalindrom('madam')

// this will return true


// Question: Given a string and a character, find the number of times the character appears in the string.

let theString = '';
let char = '';
let count = 0;

let checkCharacter = function(theString, char) {
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] === char) {
      count += 1;
    }
  }
}

checkCharacter('ababa', 'a')
console.log(count);


// Question: Given an array of numbers from 1 - 100;
// There is exactly one number in the array that is a duplicate.
// Write a method to find the duplicate number


// Question: Find your name in an array and return new array

var text = 'Rachel is in NYC. Rachel lives in Brooklyn. Rachel is 28 years old';
var myName = 'Rachel';
var hits = [];


let findName = function(text, myName) {
  for (let i = 0; i < text.length; i++ ) {
    hits.push(myName);
  }
}

findName(myName);


// Question: Reverse a string

let theString = 'Apple';
let newString = '';

let reverseString = function() {
  for (var i = theString.length - 1; i >= 0; i--) {
    newString += theString[i];
   }
    return newString
}

reverseString();


// Question: Check for Palindrome
// A Palindrome is a word that is read the same from front to back
// Example: Madam

function isPalindrome(s) {
  var s = s.toLowerCase();
  let arr = [];
  for (let i = 0; i < arr.length / 2; i += 1) {
    // compare string values from both ends iterating inwards
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

isPalindrome('madam')

// Question: Return the largest value of an array
// I need to work on this code more:
inputArray = [1,2,3,4,5];

let largestNumber = (inputArray) => {
  let largest = inputArray[0];
  inputArray.forEach((d) => {
    if d > largest {
      largest = d
    }
  })
  return largest;
}


// Question: Write a function that returns the maximum value of a given array

let arr = [5,7,8,10];
let max = 0;

function maxValue(arr) {

// Here we are iterating through the array
  for (let i = 0; i < arr.length; i++) {
//
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

maxValue();

// Given an array of numbers and an integer. Find the two values in the array whose sum is equal to the integer.
let numbers = [1,2,3,4];
let integer = 5;

findCombo = function (numbers, integer) {

  for (i = 0; i < numbers.length; i++) {
    for (n = i+1; i < numbers.length; n++) {
      if (numbers[i] + numbers[n] === integer) {
        console.log(numbers[i], numbers[n]);
      }
    }
  }
}

findCombo( [1,2,3,4],5);


// Question: What should the following code output? Explain the behavior?

(function(){
  var a = b = 3;
})();

console.log(a);
console.log(b);
// This is a IFEE function (Immediately invoked function expression)
// The scope of var a is only in that function
// console.log(a) will return undefined, because var a does not exist
// console.log(b) would return 3
// this is because a is equal to another variable, which is undefined

// When JavaScript reads var a = b = 3
// It sees b = 3;
// then var a = b;
// b becomes a global variable because anytime you declare a value of a variable that hasn't been declared it is Immediately placed in the global scope

// Question: consider the code below, will they return the same thing? Why or why not?

function foo1()
{
  return {
    bar: 'hello'
  };
}

function foo2()
{
  return
  {
    bar: 'hello'
  };
}
// foo1() returns object {bar: hello},
// foo2() returns undefined becasue it exits function on line 205 before it gets to object (white spacing matters here)



// Question: In what order will the numbers 1 - 4 be logged to the console when the code below is executed ? why?

(function() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
})

1
4
3
2

// the console will log 1 and 4 because they do not include a setTimeout
// then the setTimeout would push the log of 3 into the callback queue and then log 2 after 3
// because there is a one second timeout those would fire in sequential order after the console.logs finished executing ( and the call stack is cleared )



// What will be the output when the following code is executed? Explain?
console.log(false == '0')
// This will return true; false is loosely equal to 0
console.log(false === '0')
// This will return false; False is not strictly equalt to 0


// What's the result of executing this code and why?

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// the console will log 'undefined, 2' because the scope of var a is below the console.log and then the function would run foo() which returns 2

// this is a hoisting problem - the function foo() gets hoised. console.log(a) is undefined but not reference error
// Undefined means it's been declared but has no value, reference error means there is no variable
// Variables are hoisted below functions.


// Question: What is the output of the following code?

  // I need to look into this further ....
  var a = {},
      b = {key:'b'},
      c = {key: 'c'};

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);


  // Write a function to deliver the expected output:
  // input: [1,2,3,4,5]
  // output: [1,2,3,4,5,1,2,3,4,5]

  let array = [1,2,3,4,5]
  let newArray = []

  let duplicate = function() {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    for (let j = 0; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }

  duplicate();
  console.log(newArray);

// Question: Write a function that accepts a single parameter - array of strings
// the function returns array of numbers where number is length of the corresponding string

let words = ["hello", "what", "is", "up", "dude"];

let countTheWords = function() {
  words.map(function(word){
    console.log(word.length);
  })
}

countTheWords(words);

// Here is another option without the map helper function

let words = ["hello", "what", "is", "up", "dude"]

let lengthOfWords = []

let lengths = function(words) {
  for (let i = 0; i < words.length; i++) {
    lengthOfWords.push(words[i].length);
  }
  console.log(lengthOfWords);
}

lengths(words);

// Question: How to reverse an array of words

let sentence = '';

let wordReverse = function(sentence) {
  console.log(sentence.split('').reverse().join(''));
}

wordReverse('Reverse this message');

// Question: Write a function 'clock' that takes two integers, 'hour' and 'minute'
// the function should calculate the two angles in degrees between the **hour hand** and ** minute hand ** on a twelve house analog clock face

// let hour = 0;
// let minute = 0;
//
// let clock = (hour, minute) => {
//   hour = parseFloat(hour);
//   minute = parseFloat(minute);
//
//   if (hour < 1 || hour > 12 || min < 0 || min > 59) {
//     console.log('Out of range');
//   } else {
//     let minPosition = (min / 60) * 360;
//     let hourPosition = (hour / 12) * 360 + (360 / 12) * (min / 60);
//     let angle = Math.abs(hourPosition = minPosition);
//
//     return [angle, 360 - angle];
//   }
// };
//
// clock();


// Question: Print an array

var theArray = ['Rachel', 'Sarah', 'Rebecca'];

let printArray = () => {
  for (let i = 0; i < theArray.length; i++) {
    console.log(theArray[i]);
  }
}

printArray();


// Question: reverse a string

// this is how you reverse a string with a reverse for loop
let theString = 'Rachel';

let reverseString = () => {
  for (let i = theString.length - 1; i >= 0; i--) {
    console.log(theString[i]);
  }
}

reverseString()

// this is how you reverse a string with built in JavaScript methods:

let theString = 'Rachel';

let reverseString = () => {
  console.log(theString.split('').reverse().join(''));
  }

reverseString();


// What a function to check if a string is a Palindrome

let thePalindrome = "madam";

let checkPalindrom = () => {
  for (let i = 0; i < thePalindrome.length / 2; i += 1) {
    if (thePalindrome[i] !== thePalindrome[thePalindrome.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

checkPalindrom();

// This is how to solve the problem with the built in JavaScript functions

let thePalindrome = 'madam';

let checkPalindrom = () => {
  if (thePalindrome === thePalindrome.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false')
  }
}

checkPalindrom()

// Find the largest number in an array

let num = [1,2,4]

let findLargest = () => {
  // defining largest as the index of 0 for the array
  let largest = num[0]
  // Using the JavaScript helper method forEach
  num.forEach((d) => {
  // if any of the numbers in the array is greater than array[0], that number is the largest
    if (d > largest) { largest = d }
  })
// this will return the largest number
  console.log(largest)
}

findLargest(num);


// Print a pyramid
// Write a function called buildPyramid, that given a number creates a pyramid that is that number of rows

function buildPyramid (rows) {
  // here we are defining what symbol row would look like
  const symbol = '^';
  // here we are defining the symbol count to equal one
  let symbolCount = 1;
  // here we are deining the spaceCount to equal rows - 1
  let spaceCount = rows - 1;
  // here we are defining what the pyramid would look like
  let pyramid = '';

  for (let i = 0; i < rows; i += 1) {
    let str = '';
    for (let j = 0; j < spaceCount; j += 1) {
      str += ' ';
    }
    for (let k = 0; k < symbolCount; k += 1) {
      str += symbol;
    }
    spaceCount -= 1;
    symbolCount += 2;
    pyramid += `${str}  \n`;
  }
  return pyramid
}

buildPyramid(4)


// Print a chess board
// Write a function called ChessBoard that creates a string that represents a 8x8 grid using newline characters to seperate lines
// At each position of the grid there is either a space or # character
// The character should form a chess board

function chessBoard = () => {
  const size = 8;
  let board = '';

  for (let i = 0; i < size; i += 1) {
    for (let x = 0; x < size; x += 1) {
      if ((x + y) % 2 === 0) {
        board += '';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  return board
}

chessBoard();
