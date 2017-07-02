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


function fibonacci(num) {
  var a = 1; b = 0; temp;

  while ( num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n --;
  }
  return b;
}

fibonacci(20);

//

function fibonacci(num) {
  if ( num <= 1) return 1;

  return fibonacci( num - 1) + fibonacci( num - 2);
}

fibonacci(10)


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


//

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
