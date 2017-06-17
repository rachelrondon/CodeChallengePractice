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

// Question: Phone book
// Write a function called 'phoneBook' that given two parameters,
// the first being an array of hashes containing n number of names and phone numbers
// and the second being an array of friends names
// will then assemble a phone book that maps the 'friends' array of names to their respective phone numbers
// if they are found in the first array

// Each found entry will print the associated entry from your phone book on a new line in the form name = phoneNumber
// If an entry is not found, print Not Found instead


let arrayOne = [{sam: 9494949494}, {tom: 2020202020}, {harry: 9393939393}]

let arrayTwo = ['sam', 'ed', 'harry']

phoneBook function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
  } for (let j = 0; j < arrayTwo.length; j++) {
    if (arrayTwo[j] === arrayOne[i]) {
      console.log(arrayOne);
    } else {
      console.log('Not found')
    }
  }
}

phoneBook(arrayOne, arrayTwo)

// This solution is not correct

function phoneBook(input, mapped) {
  const contacts = [];
  const hash = [];
  const inputLen = input.length - 1;


  for (let i = 0; i <= inputLen; i += 1) {
    const contact = Object.keys(input[i]);
    hash[contact[0]] = input[i][contact];
  }
  for (let i = 0; i <= inputLen; i += 1){
    let string = '';
    if (hash[mapped[i]]) {
      string += `${mapped[i]} = ${hash[mapped[i]]}`;
    } else {
      string += 'Not Found';
    }
    contacts.push(string);
  }
  return contacts.join('\n')
}

phoneBook([{sam:99912222},{tom:11122222},{harry:12299933}], ['sam','ed','harry'])


// Binary Question
// Write a function called 'binaryCount' that given a base integer, converts it to binary and then finds and prints maximum number of consecutive '1s' in binary

// input: 60 which is 111100 in binary
// output : 4

function binaryCount(num){
  const b = Number(num).toString(2);
  let longest = 0;
  let count = 0;
  for (let i = 0; i < b.length; i +- 1) {
    if (Number(b.charAt(i))) {
      count += 1;
    } else {
      if (count > longest) { longest = count; }
      count = 0;
    }
  }
  if (count > longest ) { longest = count; }
  return longest;
}

binaryCount();

// ???

// Two Sum

// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.

function twoSum(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i += 1){
    const val = arr[i];
    const complement = target - val;
    if (hash[complement] !== undefined) {
      return [val, complement];
    }
    hash[val] = i;
  }
  return null;
}
// Given an array of integers and a target number
// 9 is the target number

// returns two array integers that add up to that target


// Question: Longest Substring with no duplicates

// Write a function called 'lengthOfLongestSubstring' that given a string, returns the length of the longest substring without repeating characters
// Should only return the length of the longest substring

let string = 'abcdabcd'
// the output should be 4
function lengthOfLongestSubstring(){
  let head = 0;
  let longest = 0;
  const hash = {};
  for (let tail = 0l tail < s.length; tail += 1) {
    const ch = s[tail];
    if (hash[ch] !== undefined && hash[ch] >= head) {
      longest = Math.max(longest, tail - head);
      head = hash[ch] + 1;
    }
    hash[ch] = tail;
  }
  longest = Math.max(longest, tail - head);
  return longest;
}

lengthOfLongestSubstring();

// Repeatify (using prototypes)
// Write a function called 'Repeatify' that takes a string and a anumber.
// The number specifies how many times the string should be repeated

// input => repeatify('hello', 3);
// output => 'hellohellohello'

function repeatify(string, num){
  return string.concat(string).concat(string)
}

repeatify('hello', 3)

// This is a way to manually put all of the string together
// Now we need to do this in a dynamic way

function repeatify(string, num){
  return string.repeat(num);
}
repeatify('hello', 3)

// The repeat method constructs and returns a new string which contains the specified number of copies of the string on which it was called.

// Here is how to write the function without the repeat method

function repeatify(string, num) {
  // here we are defining the result as a string
  let result = '';
  // here we are defining a for loop.
  // starting at zero, and ending at less than the number
  // and adding one as it iterates through.
  // the result is += string; this means that the result is the combination of all the iterations of the string
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
  }

 repeatify('hello', 3)


 // Stock Market Profit
// Write a function called getMaxProfit that takes in an array of stock prices and returns the best profit you could have made from 1 purchase and 1 sale.
// The prices in the array are in the sequence in which they were purchased and can only be sold after

stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  for (let i = 1; i < stockPricesYesterday.length; i += 1) {
    const currentPrice = stockPricesYesterday[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

getMaxProfit();
// the output should be 6

// this is the best profit that you can have from one sale.
// so it is the difference of two of the numbers.
// 11 - 5 = 6


// Randomize An Array
// Write a function, called 'shuffle' that given an array, randomizes the position of the elements and returns the new array

// Question: Print an array
// Write a function called printArr that will print the items of an array;

let array = ['abcd'];

let printArr = function() {
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

printArr();

// Question: Reverse a string
// Write a function called 'reverseString' that will take a string and return the string reversed
let string = 'rachel';

let reverseString = function() {
  for (let i = string.length - 1; i >= 0; i--) {
      console.log(string[i]);
  }
}

reverseString();


// Question isPalindrome
// Write a function called isPalindrome that will return 'true' if the given input is a Palindrome and false if it is not
let string = 'madam';

let isPalindrome = function() {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome(string);

// What is the alternative way to write this???

let string = 'madam';
let newArray = [];

let isPalindrome = function() {
 for (let i = string.length - 1; i >= 0; i--) {
    newArray.push(string[i]);
    } if (string === newArray.join('')) {
      console.log('true');
    } else {
      console.log('false');
    }
}

isPalindrome();

// I worked through this step by step to see what was happening.
// I utilized console.log to know that I had to add newArray.join('').


// Question: Find the largest number
// Write a function called 'largestNumber' that will return the largest value from an array

let array = [4,5,6,7];
// the output should be 7


let array = [4,5,6,7];

function largestNumber() {
  let largest = array[0]

  array.forEach((d) => {
    if (d > largest) {
    largest = d;
    }
  })
  return largest;
}

largestNumber(array);

// Here we are using the forEach helper method to solve the problem.


// Function: Print a Pyramid
// Write a function called 'buildPyramid' that given a number, creates a pyramid that is that number of rows

function makePyramid(rows) {
  // the symbol is a string that contains the character ^;
 const symbol = '^';
// here the symbolCount is defined as 1
 let symbolCount = 1;
 // here the spaceCount is defined as the rows - 1
 let spaceCount = rows - 1;
 // here the pyramid is defined as a string
 let pyramid = '';
 // here there is a for loop that loops through the rows
 for (let i = 0; i < rows; i += 1){
 // here str is defined as a string
 let str = '';
 // here there is a for loop
 for (let j = 0; j < spaceCount; j += 1) {
   str += ' ';
 }
 for (let k = 0; k < symbolCount; k += 1) {
   str += symbol;
 }
 spaceCount -= 1;
 symbolCount += 2;
 pyramid += `${str} \n`;
 }
 return pyramid
}

makePyramid(4);



// Question: Find The Largest Number
// Write a function called 'largestNumber' that will return the largest value from an array

let array = [4,5,6,7,8];

function largestNumber() {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) {
      largest = d
    }
  })
  return largest;
}

largestNumber(array);

// find the largest !! AGAIN!

let array = [10,11,12,13];

function largestNumber() {
    let largest = array[0];

    array.forEach((d) => {
      if (d > largest) {
        largest = d
      }
    })
    return largest;
}

largestNumber();


// Odds an evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line

let input = 'Hacker';

function oddsEvens() {
  // here we are defining two string; left and right
  // we will add the characters to their respective strings
  let left = '';
  let right = '';
  // Here we are looping through the input array
  for (let i = 0; i < input.length; i += 1) {
    // if i is even,
    if (i % 2 === 0) {
  // add this character to the string declared as left
      left += input[i];
    } else {
  // if i is NOT even, add this character to the string declared as right
      right += input[i];
    }
  }
  return `${left} ${right}`;
}

oddsEvens();

// Question: phoneBook
// Write a function called 'phoneBook' that given two parameters, the first being an array of hashes containing n number of names and phone numbers.
// The second being an array of friends names will then assemble a phone book that MAPS the 'friends' array of names to their respective phone numbers if they are found in the first array.
// Each found entry will print the associated entry from your phone book on a new line in the form name=phoneNumber;
// If the entry is not found, print Not Found;
let input = [{sam:999343434}, {tom:43343434}, {harry:343443443}]

function phoneBook(input, mapped) {
  const contacts = [];
  const hash = {};
  const inputLen = input.length - 1;

  for (let i = 0; i <= inputLen; i += 1) {
    const contact = Object.keys(input[i]);
    hash[contact[0]] = input[i][contact];
  }
  for (let i = 0; i <= inputLen; i += 1) {
    let string = '';
    if (hash[mapped[i]]) {
      string += `${mapped[i]} = ${hash[mapped[i]]}`;
    } else {
      string += 'Not found';
    }
    contacts.push(string);
  }
  return contacts.join('\n')
}

phoneBook();

// Question: Two Sum
// Write a function called 'twoSum' that given an array of integers and a target number, returns two array integers that add up to the target

// Need to work on this.
function twoSum(array, target) {
// Step 1: Write a four loop that loops through the array of integers
  for (let i = 0; i < array.length; i++) {
    const hash = {};
    const val = arr[i];
    const complement = target - val;

    if (hash[complement] !== undefined) {
      return [val, complement];
    }
    hash[val] = i;
    }
    return null;
  }

twoSum([4,6,7,3], 10);
// Step 2: Write a second four loop that loops through the array again to grab the second set of numbers
// Step 3: Write a comparison statement that tests to see if the two integers in the array equal the target number


// Question: Randomize An Array
// Write a function called 'shuffle' that given an array,
// randomizes the position of the elements and returns the new array


// IDK : I need to work on this one
let array = 'rachel';

function shuffle() {
  // Here we are defining the length of the array
 let length = array.length;
 // Here we are defining the last character in the array
 let last;
 // Here we are defining random
 let random;
// while length
 while(length) {
   // randomize = Math.floor(Math.random() multiplied by the lenth -= 1)
   random = Math.floor(Math.random() * (length -= 1));
  // let last =
   last = array[length];
   array[length] = array[random];
   array[random] = last;
 }
 return array;
}

shuffle(array);


// Question: Repeatify
// Write a function called 'repeatify' that takes a string and a number.
// The number specifies how many times the string should be repeated.

// input = repeatify('hello', 3)
// output = 'hellohellohello'


function repeatify(string) {
   return string.repeat(3);
}

repeatify('Bye', 3);

// Solve this question with a for loop!

function repeatify(str, n) {
  let result = '';
  // i is less than the number,
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

repeatify('bye', 3)

// Print an array
// Write a function that prints an array

function printArray(array) {
  return array;
}

printArray('Rachel')

// Reverse a string: write a function that reverses a string

function reverseString(string) {
    return string.split('').reverse().join('');
}

reverseString('rachel')

// Reverse a string without the built-in JavaScript methods
let string = 'Rachel'

function reverseString(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
 return reverse;
}

reverseString('Rachel')

// remember to make a new string to contain the reversed new string after it is reversed


// isPalindrome
// Write a function called isPalindrome;
// It will return 'true' if the string is a Palindrome and false if it is not

function isPalindrome(string) {
  // iterating through the string; starting at zero, ending at the length of the string divided by two (the middle of the string); increasing by one each time //
  for (let i = 0; i < string.length / 2; i++) {

    if (string[i] !== string[string.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

isPalindrome('madam');


// Question: Repeatify:
// Write a function called repeatify that takes a string and a number.
// The number specifies how many times the string should be repeated

function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)


// Write this a different way:


function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i+=1 ) {
    // you use += string instead of the iteration of the string
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Question: Find The Largest Number
// Write a function called 'largestNumber' that will return the largest value from an array

function largestNumber(num) {
  // largest is defined as the first index in the array
  // I am comparing all of the numbers in the array to the first index
  let largest = num[0]
  // for each number in the array, we are passing d
  num.forEach((d) => {
  // if d is greater than largest (num[0]) then largest = d
  if (d > largest) { largest = d}
  })
  // return the largest number in the array
  return largest
}
  // here we are passing the numbers in an array
largestNumber([4,5,6]);

// Odds and Evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line

// define the function oddEven that will be passed a string
function oddEven(string) {
// first we have to define the two strings that the characters will be pushed into
  let right = '';
  let left = '';
// Next we have to loop through the array to seperate the characters

for (let i = 0; i < string.length; i++) {
  if (i % 2 === 0) {
    left += string[i];
  } else {
    right += string[i];
  }
}
return `${left} ${right}`;
}

oddEven('rachel');


// Write a function that will print an array

function printArray (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray(["a","b"]);

// Write a function that will reverse a string

function reverseString(string) {

  return string.split('').reverse().join('');
}

reverseString('Rachel');

// How to reverse a string with a for loop:

let string = 'Rachel';

function reverseString() {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString(string);

// isPalindrome function
// Write a function that will indicate whether a function is a palindrome or not

let string = 'madam';

// a palindrome is a word that is written the same from front to back

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam')


// Repeatify
// Write a function called 'Repeatify' that takes a string and a number
// The number specifies how many times the string should be repeated

function repeatify(string, number) {
    return string.repeat(number);
}

repeatify('rachel', 3)

// How to write this as a for loop?

function repeatify(string, number) {
  let repeat = '';

  for (let i = 0; i < number; i++) {
    repeat += string;
  }
  return repeat;
}

repeatify('Rachel', 3);


// Question: Find The Largest Number
// Write a function called 'largestNumber' that will return the largest value from an array


function largestNumber(array) {
  // here I am defining the largest number as the index of zero of the array
  let largest = array[0];
  // here I am using the forEach helper method and passing d through the entire array
  array.forEach((d) => {
  // here I am comparing d with all of the numbers in the array
    if (d > larget) { largest = d}

  })
  // here the largest number will be returned to the console.
  console.log(largest);
}

largestNumber([4,5,6,7,8]);

// Odds an evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line


function oddEven(string) {

  let right = '';
  let left = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      left += string[i];
    } else {
      right += string[i];
    }
  }
  return `${left}, ${right}`
}

oddEven('rachel')



let input = 'Hacker';

function oddsEvens() {
  // here we are defining two string; left and right
  // we will add the characters to their respective strings
  let left = '';
  let right = '';
  // Here we are looping through the input array
  for (let i = 0; i < input.length; i += 1) {
    // if i is even,
    if (i % 2 === 0) {
  // add this character to the string declared as left
      left += input[i];
    } else {
  // if i is NOT even, add this character to the string declared as right
      right += input[i];
    }
  }
  return `${left} ${right}`;
}

oddsEvens();

//

let input = 'hacker';

function oddsEvens(){

  let left = '';
  let right = '';

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      left += input[i];
    } else {
      right += input[i];
    }
  }
  return `${left}, ${right}`
}

oddsEvens('hacker')


// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray('hello');

// Reverse a string

function reverseString(string) {
 return string.split('').reverse().join('');
}

reverseString('hello')

// Reverse a string with a for loop

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i-- ) {
      reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// Write a function to check if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam');


// repeatify
// write a function that will repeat a string for the certain amount of times that was indicated

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3);

// Write the repeatify function with a for loop

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number
// write a function that will return the largest number within an array

function largestNumber(array) {
  let largest = array[0]

  array.forEach((d) => {
    if (d > largest) {
      largest = d;
    }
  })
  return largest;
}

largestNumber([4,5,6,7]);


// Function: Odds/ Evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line

function oddEven(string) {
  let right = '';
  let left = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      right += string[i];
    } else {
      left += string[i];
    }
  }
  return `${right}, ${left}`;
}

oddEven('rachel')


// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6,7])


// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')


// write a function that indicates if a string is a palindrome or not

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
      console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('madam')


// repeatify - write a function that repeates a string the number of times indicated

function repeatify(string, number) {
 return string.repeat(number)
}

repeatify('hello', 3)

// write repeatify as a for loop

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i <= number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Write a function that finds the largest number within an array

function findLargestNumber(array) {
  // We have the array of numbers
  // We need to loop through the array to find the largest number
  // We need to define a variable to compare the largest number to

  let largest = array[0];

    array.forEach((d) => {
      if ( d > largest) {
        largest = d
      }
    })
    return largest;
 }

findLargestNumber([3,4,5,6])


// Odds/ evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line

function oddEven(string) {
  let left = '';
  let right = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      right += string[i];
    } else {
      left += string[i];
    }
  }
  return `${right}, ${left}`;
}

oddEven('Rachel')


// Print an array

function printArray(array){
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6,6,6])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

// reverse a string with a for loop

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// write a function that checks to see if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')){
      console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// write a for loop to check if it is a palindrome


function isPalindrome(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse){
    console.log('true');
  }  else {
    console.log('false');
  }
}

isPalindrome('madam')


// find the largest number
// write a function that will find the largest number within an array

function findLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) {
      d === largest
    }
  })
  return largest;
}

findLargest([4,5,6,7])

// Write a function that prints an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
      return array;
  }
}

printArray([4,5,6])


// Write a function that will reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

// Write a function that reverses an array with a for loop

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// Write a function that decides if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
      console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// Write this function with a for loop

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
      console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('madam')

// Repeatify - Write a function that repeats a string for the certain amount of time that was indicated

repeatify function(string, number) {
  return string.repeat(number);
}

repeatify('hello')

// Write this function with a for loop

function repeatify(string, number) {
  let newString = '';
  for (let i = 0; i <= number; i++) {
    newString += string;
  }
  return newString;
}
repeatify('hello', 3)


// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6])


// Reverse a string
function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//
function reverseString(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// check if a string is a Palindrom

function isPalindrome(string){
  if (string === string.split('').reverse().join('')){
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam');


function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--){
    reverse += string[i];
  } if (string === reverse){
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam')


// Write a function that will repeat a string for the amount of time that is specified


function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)


function repeatify(string, number) {
  let newString = '';
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Find the largest number in an array of numbers

function largestNumber(num) {
  let largest = num[0]

  num.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest
}

largestNumber([4,5,6])


// Odds/ Evens
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line


function oddEven(string) {
  let right = '';
  let left = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      right += string[i];
    } else {
      left += string[i];
    }
  }
  return `${right}, ${left}`
}

oddEven('hello')



// Binary Count
// Write a function called 'binaryCount' that given a base integer, converts it to binary and then finds and prints the maximum number of consecutive 1's in binary
// A binary number is represented by 0's and 1's
// http://www.wikihow.com/Convert-from-Decimal-to-Binary
// You divide the number by the base number
// Example: 156 / 2 = 78 ; this will be represented as zero since there is no remainder
// If there was a remainder then it would be represened by 1

// 156 / 2 = 78; 0
// 78 / 2 = 39; 0
// 39 / 2 = 19.5; 1
// 19 / 2 = 9.5; 1
// 9 / 2 = 4.5; 1
// 4 / 2 = 2; 0
// 2 / 2 = 1; 0
// 2 / 1 = 0.5; 1

// 156 = 00111001

function binaryCount(num) {
  // here I am defining b as the number variable that is passed through the function and converting it to a binary number with the toString function
  const b = Number(num).toString(2)
  // here I am defining the longest number as 0
  let longest = 0;
  // here I am defining count as 0
  let count = 0;
  // here I am declaring a for loop that is going through the binary number
  for (let i = 0; i < b.length; i++) {
    // the chatAt() method returns the specified character from a string
    // it will return the specified character from the string
    if (Number(b.charAt(i))) {
      count += 1;
    } else {
      if (count > longest) { longest = count };
      count = 0;
    }
  }
  if ( count > longest ) { longest = count }
  return longest;
  // The .toString method converts a number to a string
  // If you put 2 inside of the 2 string method, then the number will show as a binary number
}

binaryCount(60);



// Recursive functions
// A recursive function is a function which either calls itself or is in a potential cycle of function calls
// As the definition specifies, there are two types of recursive functions
// http://pages.cs.wisc.edu/~calvin/cs110/RECURSION.html


// Reverse a string with recursion
// substr() method returns the characters in a string beginning at the specified location through the specified number of characters
// the charAt method returns the specified characters
// https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb


function reverseString(str) {
  if (str === "")
    return "";

  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString('hello');


// write a function that will print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray(['4','5','6'])

// Write a function that will reverse a string

function reverseString(string){
  return string.split('').reverse().join('');
}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// check if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('hello')

//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


// Repeatify
// Write a function that will repeat a string the specified amount of time

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3)

//

function repeatify(string, number) {
  let repeat = '';
  for (let i = 0; i < number; i++) {
    repeat += string;
  }
  return repeat;
}

repeatify('hello', 3)

// Find the largest number in an array

function largestNumber(array) {
  let largest = 0;

  array.forEach((d) => {
    if (d > largest) {largest = d}
  })
  return largest;
}

largestNumber([4,5,6])


// Odds/Evens Function
function oddEven(string) {
  let left = '';
  let right = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      left += string[i];
    } else {
      right += string[i];
    }
  }
  return `${left}, ${right}`;
}

oddEven('hello')


// print a string

function printString(string){
  for (let i = 0; i < string.length; i++) {
    return string;
  }
}

printString('hello')

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')


//

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// check if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return ('true');
  } else {
    return ('false');
  }
}

isPalindrome('hello')

//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// repeatify

function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)


//

function repeatify(string, number) {
  let repeat = '';

  for (let i = 0; i < number; i++) {
    repeat += string;
  }
}

repeatify('hello', 3)


// find the largest number

function findLargestNumber(array) {
  let largest = array[0];

  array.map((d) => {
    if (d > largest) {largest = d}
  })
  return largest;
}

findLargestNumber([4,5,6,7])


// odds/evens

function oddEven(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')


// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([4,5,6])


// reverse a string

function reverseString(string) {
  console.log(string.split('').reverse().join(''));
}

reverseString('hello')

// reverse a string

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// isPalindrome

function isPalindrome(string) {
 if (string === string.split('').reverse().join('')) {
   console.log('true');
 } else {
   console.log('false');
 }
}

isPalindrome('hello')

// isPalindrome


function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


// repeatify
function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3)

// repeatify function

function repeatify(string, number) {
  let repeat = '';

  for (let i = 0; i < number; i++) {
      repeat += string;
  }
  return repeat;
}

repeatify('hello', 3)

// Find the largest number

function largestNumber(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

largestNumber([4,5,6,7])


// odd/Even number

function oddNumber(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddNumber('hello')


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([4,5,6])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
  }
   return reverse;
}


reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


// repeatify

function repeatify(string, number) {
  return string.repeat(number);
}
repeatify('hello', 3)


//
function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Find the largest number

function findLargestNumber(array) {
  // define the largest as the first index in the array [0]
  let largest = array[0];
// Here I am passing d throughout the array
  array.forEach((d) => {
    if (d > largest) { largest = d }
  })
  return largest;
  }

findLargestNumber([4,5,6,7])


// odds/ evens

function oddEven(string) {
  // here I am defining the odd and even strings
  let even = '';
  let odd = '';

  // here I am looping through the array

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// Binary Count
// Write a function called binaryCount
// Given a base integer, convert it to binary and then finds and prints maximum number of consecutive 1's in binary

function binaryCount(num) {

// Here I am converting the base number to a binary number with the toString method
const b = Number(num).toString(2);
let longest = 0;
let count = 0;

for (let i = 0; i < b.length; i += 1) {
  // the charAt method returns the character at the specified index in a string
  // this will only return one character
    if (Number(b.charAt(i))) {
      count += 1;
    } else {
      if (count > longest) { longest = count }
      count = 0;
    }
  }
  if ( count > longest ) { longest = count }
  return longest;
}

binaryCount(60)

// the output is 4

// print an array
function printArray(array){
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([4,5,6])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('')
}
reverseString('hello')

//
function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}
reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
      console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('madam')

// repeatify
function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)

// repeatify

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++){
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number

function isLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

isLargest([4,5,6])


// odds/evens

function oddEven(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//
function reverseString(string){
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


//

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')){
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


//

function isPalindrome(string){
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


//

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3)

//

function repeatify(string, number) {
  let repeat = '';

  for (let i = 0; i < number; i++) {
    repeat += string;
  }
  return repeat;
}

repeatify('hello', 3)

// Find the largest number

function findLargest(array){
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) {largest = d};s
  })
  return largest;
}

findLargest([10,12,14,16,18])

// odds/evens

function oddEven(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// Simple Array Sum
// Given an array N integer, can you find the sum of it's elements ?

function findSum(array) {
// I defined the sum as a number
  let sum = 0;
// here I am looping through the array and each iteration of the sum is being added to the array
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
// here the sum of all the numbers in the array is returned
  return sum;
}

findSum([1,2,3])

// how to find the sum of an array
// you can iterate the array and find the numbers in reach array
// then you can reduce the numbers in the array?


// Plus Minus
// Given an array of integers, calculate which fraction of it's elements are positive, which are negative, and which are zero
// Print the decimal value of each fraction on a new line

function plusMinus(array) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenCount += 1;
    } else if (i % 2 != 0) {
      oddCount += 1;
    } else {
      zeroCount += 1;
    }
  }
  return `${evenCount}, ${oddCount}, ${zeroCount}`;
}

plusMinus([4,5,6,0])
// this code needs to be revised!!!

function getSum(input){
  let lines = input.split('');

  let n = parseInt(lines[0]);
  let arr = lines[1].split('').map(function(s) { return parseInt(s);});

  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      even ++;
    } else if (arr[i] < 0) {
      odd ++;
    } else {
      zero ++;
    }
  }
  console.log(even / n);
  console.log(odd / n);
  console.log(zero / n);
// the parseInt function parses a string argument and returns an integer of the specified radix

}

getSum([4,5,6,0])

// revise this code!


function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6])


//

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')){
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// repeatify

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 2)

//

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}
repeatify('hello', 3)

//
function findLargestNumber(array) {
  let largest = array[0];

  array.forEach((d) => {
    if ( d > largest ) { largest = d}
  })
  }
  return largest;
}

findLargestNumber([4,5,6])

// odds/Evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// Simple Array Sum
// Given an array N integer, can you find the sum of it's elements ?

function getSum(array) {
// here I am defining sum as zero to start
let sum = 0;

for (let i = 0; i < array.length; i++){
  sum += array[i];
}
return sum;
}

getSum([4,5,6])

// Birthday Cake Candles
// n candles on her cake
// candle i has heighti
// She can only blow out the tallest candles
// Given the height1 for every individual candle, find and print the number of candles she can successfully blow out

// need to work on this code


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([4,5,6])


// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
  }
}

reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')){
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('hello')


// repeatify

function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)

//

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number


function findLargestNumber(array) {
  let largest = array[0];

  array.forEach((d) => {
    if ( d > largest ) { largest = d}
  })
  return largest;
}

findLargestNumber([4,5,6])


// odds/Evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// Simple array sum
// Given an array N integer, can you find the sum of it's elements ?

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])


// write a function to check if a number is prime
// define the isPrime function and pass it a number
function isPrime(num){
// if the number passed is 2, then the number is prime
  if (num === 2) {
    return true;
  }
// if the number is greater than 1
  else if(num > 1) {
// iterate from 2 to less than the number while iterating one number as a time
    for (var i = 2; i < num; i++) {
// if the number is not divisible by the numbers that are iterated through, then return true
// then the number is prime
// prime numbers are only divisible by 1 and themselves
      if (num % i !== 0 ) {
        return true;
// else if, the number is equal to a number multiplied by itself, then it is not a prime number
      } else if ( num === i * i ){
        return false
// otherwise return false
      } else {
        return false;
      }
    }
  }
}
isPrime(12)


// camelCase function
// count the number of substrings within a string
// Use regular expressions


function camelCase(string) {

return string.length - string.replace(/[A-Z]/g, '').length + 1;

}

camelCase('saveChangesInTheEditor');


// highest and lowest
// return the highest and lowest numbers within a string of numbers

function highestLowest(string) {
  let array = string.split('');

  let highest = array[0];
  let lowest = array[0];

  array.forEach((h) => {
    if ( h > highest ) { highest = h }
  })

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }

  return `${highest}, ${lowest}`
}

highestLowest('1,2,3,4,5')

// Work on the code for finding the lowest number
// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([4,5,6])


// reverse an array

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// isPalindrome

function isPalindrome(string) {
 if (string === string.split('').reverse().join('')) {
   console.log('true');
 } else {
   console.log('false');
 }
}

isPalindrome('madam')


//

function repeatify(string, number){
  return string.repeat(3);
}

repeatify('hello', 3)


//

function repeatify(string, number) {
  let repeat = '';

  for (let i = 0; i < number; i++) {
    repeat += string;
  }
  return repeat;
}

repeatify('hello', 3)

// find the largestNumber

function largestNumber(array) {
  let largest = array[0];

array.forEach((d) => {
  if ( d > largest ) { largest = d }
  })
  return largest;
}

largestNumber([4,5,6])


// odds/evens

function oddEven(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`
}

oddEven('hello')


// Simple array sum
// Given an array N integer, can you find the sum of it's elements ?

function simpleArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

simpleArray([1,2,3])

//

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false
      }
    }
  }
}

isPrime(4)

//  Multiples of 3 or 5

function solution(number){
  let found = [];

  for (let i = 3; i < number; i++) {
    if ( 0 === i % 3 || 0 === i % 5 ) {
      found.push(i);
    }
  }
  return found.reduce(function(a,b){return a + b;});
}

console.log(solution(10));

// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array);
  }
}

printArray([4,5,6])


// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}
reverseString('hello')

// reverse a string

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// find the largest number

function findLargestNumber(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

findLargestNumber([4,5,6])

// odds/Evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// simple array sum
// Given an array N integer, can you find the sum of it's elements ?


function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([4,5,6])

// isPrime
// check if a number isPrime

function isPrime(num) {
// first check if the number is equal to 2
 if (num === 2) {
// if the number is equal to 2, then the number is prime (return 'true')
   return true;
// if the number is not equal to 2, check if the number is greater than 1
 } else if ( num > 1) {
  // iterate from 2 to the number
   for ( var i = 2; i < num; i++) {
    if (num % i !== 0) {
  // if the number is not divisible by the other numbers, then it is a prime number
  // prime numbers are only divisible by 1 and itself
      return true;
    } else if ( num === i * i ) {
      return false;
    } else {
      return false;
    }
   }
 }
}

isPrime(12)


// Print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
      return array;
  }
}

printArray([4,5,6])


// reverse a string

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// isPalindrome

function isPalindrome(string){
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


// isPalindrome


function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false');
  }
}
isPalindrome('racecar')


// repeatify


function repeatify(string, number) {
  return string.repeat(3);

}

repeatify('hello', 3)


// repeatify


function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello',3)

// find the largest number

function findLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

findLargest([4,5,6])

// odds/evens


function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')


// simple array sum
// Given an array N integer, can you find the sum of it's elements ?


function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
 }

findSum([1,2,3])


// isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++)
    if (num % i !== 0) {
      return true;
    } else if (num === i * i) {
      return false;
    } else {
      return false;
    }
  }
}

isPrime(12)


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {

  return string.split('').reverse().join('');

}

reverseString('hello')

//

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

//

function findLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if ( d > largest ) { largest = d}
  })
  return largest;
}

findLargest([4,5,6])

//  odds/evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// simple string array
// given an array find the sum of all of the numbers in the array

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])


//

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if ( num === i * i ) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(12)


// Broken sequence
// You have a sequence of positive number starting with 1 but one number is missing
// Find the missing number
// If the sequence is not broken, you should return 0
// Each sequence always increments by one
// An invalid sequence (with a non numeric character) must return 1
// An already complete (or empty sequence) must return 0
// A broken sequence with more than one number missing should return the lowest missing number
    // otherwise return the missing number



// Find the greatest possible difference between two numbers in a set (all unique) of numbers
// Take the min and max using utility methods
function findDifference(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);

  console.log(max - min);
}

findDifference([1,2,3])

// This is how you find the largest difference using the built-in JavaScript methods Math.max and Math.min
// Solve this problem without using built-in JavaScript methods

function findDifference(array) {
    let max = array[0];
    let min =

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]}
  }
  return (max - Math.min(...array);
}

findDifference([1,2,3])

// This is a solution that uses only one built-in JavaScript method

// Third solution: Sort then take the difference of the first and the last numbers

function findDifference(array) {
  let newArray = array.sort();

  return Math.max(...newArray) - Math.min(...newArray);

}

findDifference([1,2,3])

//

function findDifference(array) {
  let newArray = array.sort();

  return newArray[2] - newArray[0];

}

findDifference([1,2,3])


// Nest two loops to enumerate all possible differences and return the largest one


function findDifference(numbers) {
  let newArray = numbers.sort();

  let largest = newArray[0];
  let smallest = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > largest) {
      largest = newArray[i];
    } else if (newArray[i] < smallest) {
      smallest = newArray[i];
    }
  }
  console.log(largest - smallest)
}

findDifference([2,4,9,2,16,24])

// Find the 'mode' within a list of numbers
// This is the number that appears the most times

function findMode(string) {
  let count = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        count.push(string[i])
      }
    }
  }
  return count;
}

findMode('1,2,3,3')

// solve this problem with a hash table
// A hash table is a data structure that is used to store information

key: Rachel
value: phone number

// map the key to the value
// write a hash function
// it will look at a key and then spit out the index number to state the index in the array to store this information
// it will take a key value and give us an index number

Hash(key) => index
Hash(Rachel) => 3
// everytime Rachel is entered it will give the same index number

// if more than one key has the same index number then it will chain onto that index
// this is called chaining
Hash(Rachel) => 3
// this is how you would find the person within the function
// if you have chaining then you go down the list to find where it is located
// there should not be too much chaining going on!


// DataStructures
// Arrays;
  // We can access each element through the index
  // The size is fixed
  // The size is specified when you declare the array
  // Arrays cannot easily grow

// Hash Tables
  // An array coupled with a function
  // The hash function takes data as input and outputs an integer( hash value )
  // The hash value maps the key to the index in the table
  // You would use the hash function to know where to store the given key
  // Use the same hash function to determine where to search for a given key
  // HashTables can be used to store datas for many types
  // Collision - the result of two keys hashing to the same index
  // Pro's/ Con's


// key-value lookup
// store the objects in an array
// string => hash code => index
// Chaining - When there is a collision you store them in a linked list


// Write a function called condensed_ranges() that takes an array of input ranges and outputs an array of condensed ranges

function condensed_ranges(array) {
  // first you would have to sort the array of ranges to get the arrays in order
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

condensed_ranges([(0,1), (3,5), (4,8), (10, 12), (9,10)])
// work on this code further


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')
//

function reverseString(string) {
  for (let i = string.length - 1; i >= 0; i++) {
    console.log(string[i]);
  }
}

reverseString('hello')
//

function isPalindrome(string) {
 if (string === string.split('').reverse().join('')) {
   console.log('true');
 } else {
   console.log('false');
 }
}
isPalindrome('racecar')
//

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('racecar')


// repeatify

function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)
//

// define the repeatify function and pass a string and the amount of time it is repeated
function repeatify(string, number) {
// define a new string that the repeated string will be added into
  let newString = '';

// iterate from zero to less than the number (amount of time the string will be repeated)
  for (let i = 0; i < number; i++) {
  // the original string is added to the new string the amount of times from zero to < the number passed
    newString += string;
  }
  // here the new string is returned
  return newString;
}

repeatify('hello', 3)

// find the largest number

function findLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

findLargest([4,5,6])

// odds/evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')

// simple array sum

function simpleArraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

simpleArraySum([1,2,3])

// isPrime
// write a function to check to see if a number is prime

function isPrime(num) {
  if (num === 2) {
    return true;
  }
  else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if ( num === i * i) {
        return false
      } else {
        return false;
      }
    }
  }
}

isPrime(12)

// write a function that returns the difference betwwen the smallest and largest numbers within an array
function findDifference(array) {
  let newArray = array.sort();

  let largest = newArray[0];
  let smallest = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > largest) {
      largest = newArray[i];
  } else if (newArray[i] < smallest) {
    smallest = newArray[i];
  }
}
return largest - smallest;
}

findDifference([4,5,6])

// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');

}

reverseString('hello')


//

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')


// isPalindrome

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true')
  } else {
    console.log('false')
  }
}

isPalindrome('hello')

// repeatify

function repeatify(string, number) {
  return string.repeat(3);
}

repeatify('hello', 3)
//

function repeatify(string, number) {
  let newstring = '';

  for (let i = 0; i < number; i++) {
    newstring += string;
  }
  return newstring;
}

repeatify('hello', 3)


//

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {largest = array[i]}
  }
  return largest;
}

findLargest([1,2,3])

//

function findLargest(array) {
  let largest = array[0];

  array.forEach((d) => {
    if (d > largest) { largest = d}
  })
  return largest;
}

findLargest([1,2,3])

//

function oddEven(string) {
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')


// simple array sum
// write a funtion that prints the sum of all the numbers within an array

function printSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

printSum([1,2,3])

// isPrime
// write a number that determines if a number is prime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if ( num === i * i ) {
        return false
      } else {
        return false;
      }
    }
  }
}

isPrime(3)

// findDifference

function findDifference(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return largest - smallest;
}

findDifference([1,2,3])


// twoSum
// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target) {
        return `${array[i]}, ${array[j]}`;
      }
    }
  }
}

twoSum([1,2,3,5,10,12], 4)


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([1,2,4])


// reverse a string

function reverseString(string) {
  return string.split('').reverse().join('');

}
reverseString('hello')

// reverse a string

function reverseString(string){
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}
reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  } if (string === reverse) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('racecar')


// repeatify

function repeatify(string, number) {
  return string.repeat(number);

}

repeatify('hello', 3)


//
// repeatify

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i > number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


//

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) (largest = array[i])
  }
  return largest;
}

findLargest([1,2,3])


// odds/evens

fuction oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < array.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEven('hello')


// simple array sum
// find the sum of all of the numbers within an array

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])

// find the difference with the two largest numbers within an array

function findDifference(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i]
    }
  } else if (array[i] > smallest) {
    smallest = array[i]
  }
  return largest - smallest;
}

findDifference([2,4,6])


// findSum
// given an array of integers and a target, find the two numbers that will sum up to the target number

function findSum(array, target) {

}

findSum([1,2,3], 4)



// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

reverseString('hello')

// isPalindrome

function isPalindrome(string){
  if (string === string.split('').reverse().join('')) {
    console.log('true')
  } else {
    console.log('false')
  }
}

isPalindrome('hello')

// repeatify

function repeatify(string, number) {
  return string.repeat(number)
}

repeatify('hello', 3)

//

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}
repeatify('rachel',5)

// find the largest number

function findLargestNumber(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) { largest = array[i]}
  }
  return largest;
}

findLargestNumber([1,2,3])

// odds/evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i]
    } else {
      odd += string[i]
    }
  }
  return `${even}, ${odd}`
}

oddEven('hello')


// simple array sum

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

findSum([1,2,3])

// isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if ( num === i * i ) {
        return false
      } else {
        return false;
      }
    }
  }

}

isPrime(4)

// Find difference
// Find the greatest possible difference between two numbers in a set (all unique) of numbers

function findDifference(numbers) {
  let newArray = numbers.sort();

  let largest = newArray[0];
  let smallest = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > largest) {
      largest = newArray[i];
    } else if (newArray[i] < smallest) {
      smallest = newArray[i];
    }
  }
  console.log(largest - smallest)
}

findDifference([1,2,34,2,1,3])

// twoSum
// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          console.log(`${numbers[i]}, ${numbers[j]}`)
        }
      }
  }

}

twoSum([1,2,3], 4)


//
// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
   return array[i];
  }
}

printArray([1,2,3])

// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}


printArray([1,2,3])

// reverse a string

function reverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i])
  }
}

reverseString('hello')

//
function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')
//

isPalindrome(string) {
// a palindrome is a word the spelled the same from the front or back
 if (string === string.split('').reverse().join('')) {
   console.log('yes')
 } else {
   console.log('false')
 }
}

isPalindrome('hello')

// repeatify
function repeatify(string, number) {
  return string.repeat(number)

}

repeatify('hello', 4)

// repeatify

// define the repeatify functino and pass it a string and a number
function repeatify(string, number) {
// define a new string where the repeated words will be placed into
  let newString = '';

// define a loop that starts at zero and ends at number - 1
  for (let i = 0; i < number; i++) {
// the newString = newString + string
// the string will be added the number of times from zero - number - 1 to the NewString
    newString += string
  }
// here the newString is returned
  return newString;
}

// here the string and the number are passed
repeatify('hello', 3)


// find the largestNumber

function findLargestNumber(array) {
  let largest = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest ) { largest = array[i]}
  }
  return largest
}

findLargestNumber([1,2,3])

// odds/evens

// define the function and pass it a string
function oddEven(string) {
// define even as a string
  let even = '';
// define odd as a string
  let odd = '';

// write a for loop that iterates through the entire array
  for (let i = 0; i < string.length; i++) {
// if the iteration is divisible by 2
    if (i % 2 === 0) {
  // then it will be added to the even string
      even += string[i]
    } else {
// else if, the iteration is odd it will be added to the odd string
      odd += string[i]
    }
  }
// return even and odd
  return `${even}, ${odd}`
}

oddEven('hello')

// simple array function
// write a function that will find the sum of all items within an array

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

findSum([1,2,3])

// isPrime
// write a function to determine if a number is prime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i != 0) {
        return true;
      } else if ( num === i * i ){
        return false
      } else {
        return false;
      }
    }
  }
}

isPrime(2)

// findDifference
// write a function that returns the difference between the smallest and largest numbers within an array


function findDifference(array) {
  let newArray = array.sort();

  let largest = newArray[0];
  let smallest = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > largest) {
      largest = newArray[i];
    } else if ( newArray[i] < smallest) {
      smallest = newArray[i];
    }
  }
  return largest - smallest;
}

findDifference([10,12,14])


// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


function twoSum(array, target) {
  for (let i = 0; i < array.length;i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j])
      }
    }
  }
}

twoSum([1,2,3],4)


/// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  for (let i = string.length; i >= 0; i--) {
    console.log(string[i])
  }
}

reverseString('hello')

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('yes');
  } else {
    console.log('false')
  }
}

isPalindrome('hello')


// repeatify

function repeatify(string, number) {
  return string.repeat(number)
}

repeatify('hello', 3)

// how to do this with a for loop

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string[i]
  }
 }

repeatify('hello', 3)

// find the largest number

function findLargestNumber(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) { largest = array[i]}
  }
  return largest;
}

findLargestNumber([1,2,7,6,21])

// odds/evens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${odd}, ${even}`;
}

oddEven('holla!')

// write a function that will find the sum of an array

function findSum(array) {
  // set the sum at zero
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

findSum([1,2,3])

// Find the greatest possible difference between two numbers in a set (all unique) of numbers

// you do not need to sort the array first.
// you can just use the array how it is :)
function findDifference(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i]
    } else if (array[i] < smallest) {
      smallest = array[i]
    }
  }
  return largest - smallest;
}

findDifference([50,12,1,4,6])

// twoSum
// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j])
      }
    }
   }
}

twoSum([1,2,4,5,2,1], 9)

// function isPrime
// A prime number must be a whole number greater than 1
// A prime number can be divided evenly only be one and itself
function isPrime(num) {
  // check if the number is equal to 2 because 2 is a prime number
  if (num === 2) {
    return true;
  // start at greater than 1 becasue a prime number has to be greater than 1
    } else if ( num > 1 ) {
      // start at 2 because it was already confirmed that the number is not equal to 2
      for (let i = 2; i < num; i++) {
      // if the number is not divisible by any of the numbers from 2 to the number then it is a prime number
        if ( num % i !== 0) {
          return true;
      // else if, the number is equal to an iteration multiplied by an iteration then it is not a prime number. Because prime numbers are only divisible by one and itself. They cannot be the product of two numbers multipled by each other.
      } else if ( num === i * i ) {
        return false
        } else {
          // for everything else, return false
          return false;
        }
      }
    }
  }

isPrime(10)

// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

printArray([1,2,3])

// reverse a string


function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')

// write the reverse string with a for loop

function reverseString(string) {
  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}

reverseString('hello')


// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else return false;
}

isPalindrome('racecar')

// isPalindrome

function isPalindrome(string) {
  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  } if (string === reverseString) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')


// repeatify

function repeatify(string, number) {
  return string.repeat(number);

}

repeatify('hello', 3)


// repeatify

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// find largest number

function largestNumber(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) { largest = array[i]}
  }
  return largest;
}

largestNumber([1,2,3])

// oddsEvens

function oddEven(string) {
  let odd = '';
  let even = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${even}, ${odd}`
}

oddEven('hello')

// simple array sum
// write a function to find the sum within an array

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

arraySum([1,2,3])

// FindDifference
// Find the greatest possible difference between two numbers in a set (all unique) of numbers

function FindDifference(array) {
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else if ( array[i] < smallest ) {
      smallest = array[i];
    }
  }
  return largest - smallest;
}

FindDifference([10, 12, 41, 43, 12, 1])


// twoSum
// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.


function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return `${array[i]}, ${array[j]}`
      }
    }
  }
}

twoSum([1,2,12,42,20], 62)

// isPrime
// write a function to determine if a number is prime

// what is a prime number?
// a prime number is positive and greater than one
// a prime number is only divisible by one and itself

function isPrime(num) {
  if ( num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if ( num  % i !== 0) {
        return true;
      } else if ( num === i * i ) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(7)
