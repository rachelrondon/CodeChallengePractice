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
