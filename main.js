// Write a function that determines if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('hello')

// Use a for loop to determine if a string is a palindrome

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1 ; i >= 0; i--) {
   newString += string[i];
 } if (string === newString) {
   console.log('true');
 } else {
   console.log('false');
 }
}

isPalindrome('racecar')

// Repeatify: Write a function called 'Repeatify' that takes a string and a number.
// The number specifies how many times the string should be repeated

function Repeatify(string, number) {
  return string.repeat(number);
}

Repeatify('hello', 3)

// Use a for loop to write the repeatify function

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Find The Largest Number: Write a function that finds the largest integer within an array

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) { largest = array[i]}
  }
  return largest;
}

findLargest([1,2,3])

// Odds/Evens

function oddsEvens(string) {
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

oddsEvens('hello')


// Simple Array Sum: Given an array, find the sum of the integers.
function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

findSum([1,2,3])

// isPrime:

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i){
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(num)


// Find the greatest possible difference between two numbers in a set (all unique) of numbers
// This is how you find the largest difference using the built-in JavaScript methods Math.max and Math.min

function findDifference(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);

  console.log(max - min);
}

findDifference([1,2,3])

// This is a solution that uses only one built-in JavaScript method

function findDifference(array) {
    let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]}
  }
  return (max - Math.min(...array));
}

findDifference([1,2,3])


// Third solution: Sort then take the difference of the first and the last numbers

function findDifference(array) {
  let newArray = array.sort();

  return Math.max(...newArray) - Math.min(...newArray);

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

twoSum([1,2,3,4], 3)


// reverse a string

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')

// check if a string is a palindrome
// a palindrome is a word that is spelled the same from the front to the back


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
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    console.log('true');
  }  else {
    console.log('false');
  }
}

isPalindrome('hello')


// repeatify

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('rachel', 3)

// repeatify

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string[i];
  }
  return newString;
}

repeatify('rachel', 3)

// find the largest number witihn an array of numbers

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) { largest = array[i]}
  }
  return largest;
}

findLargest([1,2,3,4])


// odds/evens

function oddEvens(string) {
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

oddsEvens('hello')

// simple array sum

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])

// find the largest difference between two integers within an array

function findDifference(array) {
  let smallest = array[0];
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return largest - smallest;
}

findDifference([1,2,3,5])

// twoSum

// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ( array[i] + array[j] === target) {
        console.log(array[i], array[j])
      }
    }
   }
}

twoSum([1,2,4,3,3], 6)
// isPrime

function isPrime(num) {
// since 2 is a prime number, check to see if the number equals 2 first
  if (num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i != 0) {
        return true;
      } else if ( num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(7)


// min-max sum
// Given five positive integers, find the min and max values that can be calculated by summing exactly four of the five integers
// the print the respecitve minimum and maximum values as a single line of two space-seperated long integers


// Sum Consecutives
// You are given a list/array which contains only integers (positive and negative).
// Your job is to sum only the numbers that are the same and consecutive
// The result should be one list


function sumConsecutives(array) {
  let sum = '';

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i] + 1) {
        console.log(array[j])
      }
    }
  }
  return sum;
}

sumConsecutives([1,4,4,4,0,4,3,3,1])

// isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if ( num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i){
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(num)

// this does not work with 21. Need to look into this further.


// factorial
// return a number that is a factorial of the given number
// this is a good place to use recursion

function factorialize(num) {
  if (num < 0) {
    return - 1;
  } else if (num == 0){
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}
factorialize(5)


// Fibonacci Sequence
// Every number after the first two is the sum of the two preceding ones

//
// function fibonacci(num) {
//   var a = 1; b = 0; temp;
//
//   while ( num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     n --;
//   }
//   return b;
// }
//
// fibonacci(20);

//

// function fibonacci(num) {
//   if ( num <= 1) return 1;
//
//   return fibonacci( num - 1) + fibonacci( num - 2);
// }
//
// fibonacci(10)


// Write a function to check if the array is sorted

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,4])


// filter function
function theFunction(number) {
  return number < 3;
}

function filterFunction(array) {
  return array.filter(theFunction);
}

filterFunction([1,2,3,4])


// reduce function

var total = [1,2,3,4].reduce(function(a, b) {
  return a + b;

}, 0);

// reverse

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')


// indexOf
// syntax: str.indexOf(searchValue[, fromIndex])

'Hello Rachel'.indexOf('Rachel')
// this states that index number where 'Rachel' is listed

[1,2,3].indexOf(1);
[1,2,3].indexOf(4);


// isPalindrome
// write a function to check if the string is a palindrome

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello')

// write the isPalindrome function with the JS built-in reverse function
function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('racecar')

// missing

// write a function and pass it an array
// for this function, I am subtracting the actual sum from the expected sum;
function findMissing(array) {
  // define n as the length of the array plus one
  let n = array.length + 1;
  // let n = 4
  // define the sum as zero
  let sum = 0;
  // 4 * (4 + 1) / 2
  // 4 * 5  / 2
  // 20 / 2 = 10
  let expectedSum = n * (n + 1) / 2;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    // sum = 8
  }
  return expectedSum - sum;
  // 10 - 8 = 2
}

findMissing([1,3,4])
// 2 is the missing number

// write a function that runs in 0(n) time



// isBalanced
// write a function that takes a string and returns true or false indicating whether its curly braces are balanced

function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '}') {
      count += 1;
    }
  }
  if (count % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}

isBalanced('foo { bar { baz } boo }')


// isBalanced2
// it should be able to look at braces that are curly {}, square [], or ();
function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '}') {
      count += 1;
    } else if (string[i] === '[' || string[i] === ']') {
      count += 1;
    } else if (string[i] === '(' || string[i] === ')') {
      count += 1;
    }
  }
  if (count % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}

isBalanced('(foo { bar (baz) [boo] })')
// Look into ('foo { (bar [baz] } )')  ;
// A string with interleaving braces should return false;

// uniq
// Writes a function that takes an array of numbers, and returns the unique numbers.
// Can you do this in O(N) time?
// Work on the isUnique function


// isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if ( num % i !== 0) {
        return true;
      } else if ( num = i * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(4)

// factorial

function factorialize(num) {
  // if the number is less than 0; then the factor is -1
  if (num < 0) {
    return -1;
  // if the number is 0; then the factor is 1
  } else if (num === 0) {
    return 1;
// else; if the number is not a negative number or zero
// then retun the number multiplized by (factorialize(num - 1))
  } else {
    return (num * factorialize(num - 1));
  }
}

factorialize(6)


// fibonacci

function fibIterative(n) {
  let [a,b] = [1,0];
  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}

fibIterative(20)

// this is written in ES6
function fibIterative(n) {
  let [a,b] = [1,0];

// in every interation of the loop,
// counting back from n to 0;
// a becomes the sum of the two numbers
// and b becomes the previous value of the higher number a
// When n reaches 0, the lower of the two numbers is returned and it resolves to the n th number in the Fibonacci sequence

// the loop is iterating down from n to 0
  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}

fibIterative(20)

// source: https://gregjs.com/javascript/2016/writing-a-fibonacci-implementation-in-javascript/


// here is the solution in ES5

function fibIterativeES5(n) {
  let a = 1;
  let b = 0;
  let c = null;

  while (n > 0) {
    c = a;
    a = b + a;
    b = c;
    n--;
  }
  return b;
}


// isSorted Function

function isSorted(array) {
// a for loop is written
  for (let i = 0; i < array.length; i++) {
// if an iteration of the array is less than the iteration of the array that is the index below it. Then return false;
  if (array[i] < array[i - 1]) {
      return false;
    }
  }
// else, return true;
  return true;
}

isSorted([10, 9, 8, 14, 20])

// filter function

function filterFunction(n) {
  return n <= 5;
}

[1,2,3,5,10,12].filter(filterFunction);


// reduce function
let total = [0,1,2,3].reduce(function(sum, value) {
  return sum + vale;
}, 0)


// the reduce function used with addition
let array = [1,2,3,4].reduce(function(a,b) {
  return a + b;
}, 0)


// the reduce function used with multiplication
let theNumbers = [10,2,3].reduce(function(a,b) {
  return a * b
})

console.log(theNumbers)

// the reduce function used with subtraction
let theNumbers = [10,2,3].reduce(function(a,b) {
  return a - b
})

console.log(theNumbers)

// the reduce function used with the concat function
let theNumbers = [[10],[2],[3]].reduce(function(a,b) {
  return a.concat(b)
})

console.log(theNumbers)


// Reverse a string

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')

// indexOf

[1,2,3,4,5].indexOf(5,0)


// isPalindrome
// write a function to check if a string is a palindrome

function isPalindrome(string) {
   if (string === string.split('').reverse().join('')) {
     return true;
   } else {
     return false;
   }
}

isPalindrome('racecar')


//
function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--)  {
    newString += string[i];
    console.log(newString)
  } if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('madam')

// Missing: Write a function to find the missing number within an array

function findMissing(array) {
  let n = array.length + 1;
  // n = 4
  let sum = 0;
  // sum = 0
  let expectedSum = n * (n + 1) / 2;
  // expectedSum = 4 * (4 + 1) / 2
  // expectedSum = 10

  // here is a iteration that will provide the sum of the numbers in the array
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // here the actual sum is subtracted from the expected sum to find the missing number
  return expectedSum - sum;
}

findMissing([1,3,4])

// isBalanced

function isBalanced(string) {
  let count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === '{') {
    count += 1;
  } else if (string[i] === '}') {
    count += 1;
  }
}
if (count % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isBalanced('foo { bar { baz }')

// includes
// return true or false indicating whether tha given number appears in the given sorted array


[1,2,3,4].includes(1)
// this returns true

'Rachel Rondon'.includes('R')
// this returns true

'Rachel Rondon'.includes('r')
// this returns false


// function isPrime


function isPrime(num) {
  if ( num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if ( num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(7)

// factorial

// define a function that is passed a number
function factorialize(num) {
  // if the number is less than zero, then the factor is -1
    if (num < 0) {
      return - 1;
// if the number is equal to 0, then the factor is 1
    } else if (num === 0) {
      return 1;
// if the number is not negative or 0; then return the number multiplied by factorialize(number - 1)
    } else {
      return (num * factorialize(num - 1));
    }
}
factorialize(5)


// fibonacci
// write the fibonacci function with a iteration
function fibonacci(number) {
  // define a as 1 and b as 0
  let [a,b] = [1,0];

// the while loop will loop through the block of code as long as the condition is met
  while (number-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}

fibonacci(10)


// isSorted

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,4])


// filter method

function newFilter(number){
  return number < 3
}

[1,2,3,4].filter(newFilter)


// reduce function

let total = [1,2,3].reduce(function(a, b) {
  return a + b;
},0)

// reverse a string

function reverse(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverse('hello')


// indexOf

'Rachel Rondon'.indexOf('Rondon');
// this returns 7

'Rachel Rondon'.indexOf('sdfsdfds');
// this returns -1 because this is not included within the original string

[1,2,3].indexOf(1)
// this returns 0

[1,2,3].indexOf(4)
// this returns -1 becuase 4 is not included within the original array

// write a function to check if a string is a palindrome
// a palindrome is a word that is written the same way from forwards to backwards

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello')

// write the palindrome function with a for loop

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello')


// missing: Write a function to find the missing number within an array of numbers

function findMissing(array) {
  let n = array.length + 1;
  let sum = 0;
  let expectedSum = n * (n + 1) / 2;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return expectedSum - sum;
}

findMissing([1,2,3,4])

// isUnique
// takes an array of numbers and returns the unique numbers

// Work on this solution! I was able to grab the duplicate numbers witihn the array
function isUnique(array) {
  let dublicateArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      dublicateArray.push(array[i]);
    }
  }
  return dublicateArray;
}

isUnique([1,1,2,2,3])

// Intersection: Find the intersection of two arrays

function findIntersection(arrayOne, arrayTwo) {

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        console.log(arrayOne[i], arrayTwo[j])
      }
    }
  }
}

findIntersection([1,5,4,2], [8,91,4,1,3])


// permutation
function permut(string) {

  let character = '';

  if (string.length < 2) {
    return string;
  } else if (string.length > 2) {
    for (let i = 0; i < string.length; i++) {
      character += string[i];
    } if (string.indexOf(character) != i) {
      continue;
      let remainingString = string.slice(0,i) + string.slice(i + 1, string.length);

      for
    }
  }
}

permut('abc')


// isPrime

function isPrime(num) {
  // 2 is a prime number
  if (num === 2) {
    return true;
  // prime numbers are only positive
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
  }
 }
}

isPrime(22);


// factorial

// this function uses recursion
function isFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * isFactorial(num - 1));
    }
}

isFactorial(1)


// fibonacci

function fibonacci(num) {
  // a is declared and defined as 1
  // b is declared and defined as 0
  let [a,b] = [1,0];

// a while loop is written and it will run as long as the condition is met
  while (num-- > 0) {
// it is a negative iteration from the number to a number greater than 0
// a is redefined as b + a
// b is redefined as a, the number before it
    [a,b] = [b + a, a];
  }
// b is returned
  return b;
}

fibonacci(10)


// isSorted:

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,4])


// filter function

function newFilter(num) {
  return num > 5;
}

[1,2,3,4,10,12,15,14].filter(newFilter)

// reduce function

let sum = [1,2,3].reduce(function(a,b) {
  return a + b;
})
console.log(sum);


let product = [1,2,3].reduce(function(a,b) {
  return a * b;
})
console.log(product)


let subtracted = [1,2,3].reduce(function(a,b) {
  return a - b;
})
console.log(subtracted)

let divided = [1,2,3].reduce(function(a,b) {
  return a / b;
})
console.log(divided)


// reverse a string

function reverseString(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')

//

function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')


// indexOf

[1,2,3].indexOf(3);

'Rachel Rondon'.indexOf('Rondon', 0)


// isPalindrome

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('madam')


// missing

function missingNumber(array) {
  // the value of n is the length of the array + 1
  let n = array.length + 1;
  // the value of sum is zero
  let sum = 0;
  // the value of the expectedSum is n (length of the array + 1) multiplied by n (the length of the array + 1) + 1 / 2
  let expectedSum = n * (n + 1) / 2;

// a for loop is then written
  for (let i = 0; i < array.length; i++) {
// the sum of all of the integers in the array is calculated
    sum += array[i]
  }
// return the result of the expectedSum minus the sum which will provide the missing integer
  return expectedSum - sum;
}

missingNumber([1,2,3,5])


// isBalanced

function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{') {
      count += 1;
    } else if (string[i] === '}') {
      count += 1;
    }
  }
  if (count % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isBalanced('foo { bar { baz } boo }')


// debugging
function greet(person) {
  if (person.name === 'amy') {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })


//
for (let i = 0; i < 4; i++) {
  setTimeout(function(){
    console.log(i);},0);
 }


 // with ES6

 for (let i = 0; i < 4; i++) {
   setTimeout(() => {
     console.log(i);},0);
 }


//

let dog = {
  name: 'doggo',
  sayName() {
    console.log(dog.name)
  }
}

let sayName = dog.sayName

sayName();


//

function Dog(name) {
  this.name = name;
}
Dog('fido');

function dogBark() {
  console.log(this.name + ' says woof');
}

dogBark(Dog)

//

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true



// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array;
  }
}

printArray([1,2,3])


// find the largest number within an array

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
findLargest([1,2,3,4])


// odds/evens

function oddEvens(string) {
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

oddEvens('hello')


// simple array sum;
// find the sum of all the integers within an array

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])


// findDifference
// find the largest difference within an array of integers

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

findDifference([1,2,3,4,5,6])

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

twoSum([1,2,3,4], 5)

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


// isPalindrome

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('racecar')

// repeatify


function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3)

// repeatify with a for loop
function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number within an array

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

findLargest([1,2,3,4,5])

// evens/odds
function evenOdds(string) {
  let evens = '';
  let odds = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      evens += string[i];
    } else {
      odds += string[i];
    }
  }
  return `${evens}, ${odds}`;
}

evenOdds('hello')


// simple array sum

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3,4])


// find the largest difference between the integers in an array

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

findDifference([10,12,14,15])


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

twoSum([1,2,3,2], 4)
// this returns 1,3 and 2,2


// isPrime

function isPrime(number) {
  if (number === 2) {
    return true;
  } else if (number > 0) {
    for (let i = 2; i < number; i++) {
      if (number % i !== 0) {
        return true;
      } else if (number === i * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(26)


// factorial

function findFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * findFactorial(num - 1));
  }
}

findFactorial(6)


// factorial

function findFactorial(num) {
  // start with the given factorials
  // if the number is negative, then the factorial is -1
  if (num < 0) {
    return -1;
  // if the number is 0, then the factorial is 1
  } else if (num === 0) {
    return 1;
  // else, to find the factorial, multiply the number by the recurssion (findFactorial(number - 1))
  } else {
    return (num * findFactorial(num - 1));
  }
}
findFactorial(6)
// pass the number when the function is called


// findFactorial

function findFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * findFactorial(num - 1));
  }
}

findFactorial(6)

// find factorial

function findFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * findFactorial(num - 1));
  }
}

findFactorial(6)

// findFactorial

function findFactorial(num) {
  if (num < 0) {
    return -1;
  }  else if (num === 0) {
    return 1;
  } else {
    return (num * findFactorial(num - 1));
  }
}

findFactorial(6)

// a factorial is 6!
// 6 * 5 * 4 * 3 * 2 * 1


// Fibonacci
// the Fibonacci sequence
// 1,1,2,3,5,8
// the integer is the product of the two integers written before

function findFibonacci(num) {
  let [a,b] = [1,0];

  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}

findFibonacci(10)


//

function findFibonacci(num) {
  // find define a and b
  let [a,b] = [1,0];

// then a and b are redefined within the while loop
  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
// request for b to be returned
  return b;
}

findFibonacci(10)

//
function findFibonacci(num) {
  let [a,b] = [1,0];

  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}
findFibonacci(10)

// isSorted
// check is an array of integers is sorted

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]){
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,7,6]);

// this will return as false

// filter function


function theFilter(num) {
  return num < 5;
}

[1,2,3,4,5,10,12].filter(theFilter)


function theFilter(string) {
  return string === 'r';
}

//
let names = ['Rachel', 'Sarah', 'Rebecca', 'Jean'];

let theLongestNames = names.filter(function(names){
  return names.length >= 6;
})

console.log(theLongestNames)

// reduce function

let numbers = [1,2,3,4,5];

let theReduction = numbers.reduce(function(a,b) {
  return a + b;
});

console.log(theReduction);


// find the missing integer

function findMissing(array) {
  let n = array.length + 1;
  let sum = 0;
  let expectedSum = n * (n + 1) / 2;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return expectedSum - sum;
}

findMissing([1,2,3])

//

function findMissing(array) {
  let n = array.length + 1;
  let sum = 0;
  let expectedSum = n * (n + 1) / 2;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return expectedSum - sum;
}

findMissing([1,2,3])

// with this function, the array has to start at zero and only one integer can be missing
//


function findMissing(array) {
  // define n as the length of the array + 1
  let n = array.length + 1;
  let sum = 0;
  let expectedSum = n * (n + 1) / 2

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return expectedSum - sum;
}

findMissing([1,2,3])

// isBalanced

function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '}') {
      count += 1;
    } else if (string[i] === '{') {
      count += 1;
    }
  }
  console.log(count)
  // if the number is even, return true;
  if (count % 2 === 0) {
    return true;
  // else, if the number is false, return false
  } else {
    return false;
  }
}

isBalanced('foo { bar { baz } boo }')


// isUnique
// Writes a function that takes an array of numbers, and returns the unique numbers.
// this leaves only the unique items within the array.

function isUnique(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[i + 1]) {
      array.splice(i, 2);
    } else if (array[j] === array[j + 1]) {
      array.splice(j, 2);
    }
  }
}
  return array;
}

isUnique([1,2,3,4,4,3,5,5,6,6]);
// work on this solution more!
// thhis function will work for an endless amount of duplicates :)
// this function identifies the duplicates within the array and then remoes them from the array
// this leaves only the unique items within the array.


// print an array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
}

printArray([1,2,3])

// print an array

function printArray(array) {
    return array;
}

printArray([1,2,3])


// reverse an array

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello');

// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('racecar')

// isPalindrome

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('madam')

// repeatify

function repeatify(string, number) {
  let newString = '';
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

findLargest([10,12,16,5])

// oddEvens

function oddEvens(string) {
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

oddEvens('hello')

// simple array sum

function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

findSum([1,2,3])

// find difference

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

findDifference([10,24,2])

// twoSum

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j])
      }
    }
  }
}

twoSum([1,2,3,4],5)


// isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

isPrime(7)

// factorial

function findFactorial(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return (num *findFactorial(num - 1));
    }
  }

findFactorial(6)

// Fibonacci

function fibIterative(n) {
  let [a,b] = [1,0];
  while (n-- > 0) {
    [a,b] = [b + a, a];
  }
  return b;
}

fibIterative(20)

//

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,4])

// filter function

let names = ['Rachel', 'Sun', 'Sarah', 'Rebecca'];

let smallestNames = names.filter(function(names) {
  return names.length < 4;
});

console.log(smallestNames);

// reduce function

let total = [0,1,2,3].reduce(function(sum, value) {
  return sum + value;
}, 0)

console.log(total)

// findMissing

function findMissing(array) {
  let n = array.length + 1;
  let sum = 0;
  let expectedSum = n * (n + 1) / 2;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return expectedSum - sum;
}

findMissing([1,3,4])


// isBalanced

function isBalanced(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '}') {
      count += 1;
    } else if (string[i] === '{') {
      count += 1;
    }
  }
 if (count % 2 === 0) {
   return true;
 } else {
   return false;
 }
}

isBalanced('(foo { bar (baz) [boo] })')


// isUnique

function isUnique(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(array[i],2);
      }
    }
  }
}

isUnique([1,2,2,3,3,4,4])

// write a javascript statement that solves the pythagorean theorem.

function pythagorean(sideA, sideB) {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  // this means return the square root of (sideA^2) + (sideB^2);
}

console.log(pythagorean(4,3))

//Math.sqrt returns the square root of a number
// Math.pow retursn the base to the exponent power


// write a javascript statement that converts weight in pounds(lbs) to kilograms(kg);

function convertWeight(num) {
  return num / 2.2;
}

convertWeight(7)

// Given an array, write a JavaScript function that prints 'Rachel Rondon' to the console

let names = ['Rachel', 'Sarah', 'Rebecca'];

console.log(names[0]);


// write an if/else statement that checks the value of age.
// if age is 21 or highter, print 'OK, you can have a drink'.
// if age is under 21, print 'Get lost kid! We don't serve minors here!!'

function checkID(age) {
  if (age >= 21) {
    return 'You can have a drink!'
  } else if (age < 21) {
    return 'You are too young to drink!'
  }
}

checkID(22)


// write a function called multiply that takes 2 numbers as parameters and returns the product of those 2 numbers

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

multiply(10,2)


// write a function called maxOfThree that takes 3 numbers as parameters and returns the largest number of the three.
// Try doing this without using Math.max();

function maxOfThree(numOne, numTwo, numThree) {
  if (numOne > numTwo && numOne > numThree) {
    return numOne;
  } else if (numTwo > numOne && numTwo > numThree) {
    return numTwo;
  } else {
    return numThree;
  }
}

maxOfThree(10,14,12);

// write a function called generateGreeting that takes a single string as a parameter (a name) and returns a friendly, customized greeting.


function generateGreeting(name) {
 return `Hello ${name}!`;
}

generateGreeting('Rachel');


// print an array

function printArray(array) {
  return array;
}

printArray('hello');


// reverse a string
function reverseString(string) {
 let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello');


// check if a string is a palindrome
function checkPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

checkPalindrome('racecar')

// repeatify

function repeatify(string, number) {
  return string.repeat(number);
}

repeatify('hello', 3)


// repeatify with a for loop
function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// find the largest number within an array

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

findLargest([10,12,14,16])


// odds/evens

function oddEvens(string){
  let even = '';
  let odd = '';

  for (let i = 0; i < string.length; i++){
    if (i % 2 === 0) {
      even += string[i];
    } else {
      odd += string[i];
    }
  }
  return `${odd}, ${even}`;
}

oddEvens('hello')


// simple array sum
function findSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
  return sum;
}

findSum([1,2,3]);


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

findDifference([1,2,3,4])


// twoSum

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
      }
    }
  }
}

twoSum([1,2,3,2],4)


// print an array

function printArray(array) {
  return array;
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')


// isPalindrome
// check if a string is a palindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello')

// repeatify

function repeatify(string, number) {
  return string.repeat(number);

}

repeatify('hello', 3)


// repeatify with a for loop

function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// find the largest number

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > larget) {
      largest = array[i];
    }
  }
  return largest;
}

findLargest('hello')


// odd/Evens

function oddEvens(string) {
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

oddEvens('hello')

// simple array sum

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

arraySum([1,2,3])

// findDifference
// find the largest difference between the integers in an array

function findLDifference(array) {
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

findDifference([1,2,3,10])

// twoSum

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j])
      }
    }
  }
}


twoSum([1,2,3], 5)

// isBalanced
function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '}') {
      count += 1;
    } else if (string[i] === '{') {
      count += 1;
    }
  }
 return count;
}

isBalanced('{{}')
// this function should return false

// isSorted
// declare an isSorted function and pass it an array
function isSorted(array) {
// declare a for loop
  for (let i = 0; i < array.length; i++) {
// if an iteration minus 1 is greater than the iteration return false
// if this is sorted than it cannot happen
// however, if it is sorted then it can happen
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

isSorted([1,2,3,4])


// print an array

function printArray(array) {
  return array;
}

// reverse a string

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

reverseString('hello')


// isPalindrome

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello')


/* Recursion in JavaScript */
var nums = [1,2,3,4];
var sum = 10;

/* Find the sum with recursion */
/* Recursion is a function that calls itself */

function sum() {
  return sum();
}
var nums = [1,2,3,4];
var sum = 10;

/* The function sum is calling itself within itself */
/*
1,2,3,4 = 1 + sum(2,3,4) = 1 + 9 = 10
2,3,4 = 2 + sum(3,4) = 2 + 7
3,4 = 7 --  this is the base case
*/

var nums = [1,2,3,4];
var sum = 10;
// find the sum with recursion


// 1,2,3,4 = 1 + sum(2,3,4) = 10;
// 2,3,4 = 2 + sum(3,4) = 9;
// 3,4 = 7  - this is the base case




function sum() {
  // Array.from converts the arguments into an array
  var args = Array.from(arguments);
  // first is defined as the index of 0 in the arguments array
  var first = args[0];
  // second is defined as the index of 1 in the arguments array
  var second = args[1];
  // this is the base case
  // if there are only two arguments then add them together
  if (args.length === 2) {
    return first + second;
  }
  return first + sum.apply(null, args.slice(1));
  // args.slice(1) - start at the index of 1 in the array
  // call the function using apply
}

var result = sum(1,2,3,4);
console.log(result)

// Video source: https://www.youtube.com/watch?v=_GQLS2TqX-4
// every recursion statement needs a base case
// it needs a base case b/c otherwise it will call itself again and again


Regular Expressions:
// Regular expressions are patterns used to match character combinations in strings.
// In JavaScript, regular expressions are also objects
// These patterns are used with the exec and test methods of RegExp
// and the match, replace, search, and split methods of String

Regular Expression Literal:
var re = /ab+c/;

Constructor Function of the RegExp object:
var re = new RegExp('ab+c');

Simple Patterns
// Simple patterns are constructed of characters for which you want to find a direct match
var re = /abc/
// this will find the direct match for "abc".
// it will not match with "cba" or any other combination of the letters

Special Characters
// When the search for a match requires something more than a direct match, such as finding one ore more b's or finding white space, the pattern includes special characters

var re = /ab*c/
// this matches any character combination in which a single "a" is followed by zero or more b's and then immediately followed by "C"
// *  = zero or more occurrences of the preceding item
// in the string "cbbabbbbcdebc" this matches "abbbbc";

Special Characters:
* = 'zero or more occurrences of the preceding item';
\ = 'a \ that precedes (comes before) a non-special character indicates that the next character is special and is not to be interpreted literally'
// example: 'b' = lowercase 'b's whereever they occur
// example: '\b' = forms the special word boundary character
// '\b' = this matches a position where the previous and next character are the same type
      // either both must be words, or both must be non-words.
      // the beginning and end of a string are considered non-words

// Online Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-word-boundary


// Print an array

function printArray(array) {
  return array;
}

printArray([1,2,3])

// reverse a string

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
  }
  return newString;
}

reverseString('hello');

// isPalindrome
// check if a string is a palindrome
// A palindrome is a string that can be spelled the same forwards and backwards

function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (string === newString) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isPalindrome('hello')

// repeatify
// return a new string that repeats a string the sepcified amount of time

function repeatify(string, number){
  let newString = '';
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)

// Find the Largest Number within an array

function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

findLargest([10,12,14,16])


// oddEven

function oddEvens(string) {
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

oddEvens('hello');

// Simple array sum

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

arraySum([10,12,14]);


// Find the difference between the largest and smallest numbers within an array

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

findDifference([1,2,3,4])

// twoSum
// Write a function called twoSum that given an array of integers and a target number, returns two array integers that add up to the target.

function twoSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
      }
    }
  }
}

twoSum([1,2,2,3], 4);

// isPrime
// Write a function to check if a number isPrime

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  }
}

isPrime(10);


// Default Function Arguments
function makeAjaxRequest(url) {
  // if there is no method, the message should be a GET
  // in both cases, the method should end up as a GET request
  if (!method) {
    method = 'GET';
  }

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

// Here is another way how to write this

function makeAjaxRequest(url, method = 'GET') {
  return method;

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');


// More complex Default Function Arguments

// every time a user is created, it has to be passed an id
function User(id) {
  this.id = id;
}

new User(1);

// what is you want a random number to be generated every time you create a user

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser(user);


// REST & SPREAD OPERATORS
// The purpose is to write less code

function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5]);


// what is you want to sum a bunch of numbers but they are not in an array

// This is the REST operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7)
// Want to capture all of the arguments and put them into a single array

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
// You can pass another array to concat and it will create a single array

// Another way to write this..

// the ... is the spread operator

const newArray = [ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];

console.log(newArray);

// You can add in new elements as you add the arrays
// This is the SPREAD OPERATOR


function validateShoppingList(...items) {
  // if 'milk' is not included within the list of items, add milk to the list of items.
  // this ensures that milk is always included within the items list
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');


// REST OPERATOR
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// REST OPERATOR
// WHEN TO USE THE REST OPERATOR
//
// const MathLibrary = {
//   calculateProduct(a, b) {
//     return a * b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
// };

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead!')
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// Destructuring

var expense = {
  type: 'Business',
  amount: '$45 USD'
};
//

// ES6


const { type } = expense;
// ES5:var type = expense.type;
// This is not creating an object. If the {} are on the left-hand-side, it means I want to define a variable type and I want it to be set equal to expense.type.
const { amount } = expense;
// ES5: var amount = expense.amount;
// Here is another way to write it
// We can only reference this because it is defined above.
const { type, amount } = expense;
type;
amount;

// Another example:

var savedFiled = {
  extension: '.jpg';
  name: 'repost',
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`
}

fileSummary(savedFiled);

// ES6 is about reducing the amount of repeated code that you have

// Here is another way to write this:
// de-structure off of our arguments object
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled, {color: 'red' });

//

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3, name4 ] = companies;
name;
name2;
name3;
typeof name4; 


// print an array 
function printArray(array) {
  return array;
}
printArray([1,2,3])

// reverse a string 
function reverseString(string) {
  return string.split('').reverse().join('');
}

reverseString('hello')


// reverse a string with a for loop 
function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString; 
}

reverseString('hello')

// isPalindrome - check if a string is a palindrome 
function isPalindrome(string) {
  if (string === string.split('').reverse().join('')){
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam')

// Check if a string is a palindrome with a for loop 
function isPalindrome(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } if (string === newString) {
    console.log('true');
  } else {
    console.log('false')
  }
}

isPalindrome('madam')

// repeatify 
function repeatify(string, number) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}

repeatify('hello', 3)


// Find the largest number 
// Find the largest number within an array 
function findLargest(array){
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest; 
}

findLargest([1,2,3,4])

// OddsEvens 

function oddEvens(str) {
  let odd = '';
  let even = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str[i];
    } else {
      odd += str[i];
    }
  }
  return `${even}, ${odd}`;
}

oddEvens('hello');