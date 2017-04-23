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
