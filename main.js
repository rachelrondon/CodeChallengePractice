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
