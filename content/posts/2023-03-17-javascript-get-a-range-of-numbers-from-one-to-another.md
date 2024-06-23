---
title: "JavaScript: get a range of numbers from one to another."
date: "2023-03-17"
categories: 
  - "code"
author: "chart"
url: "/code/2023/03/17/javascript-get-a-range-of-numbers-from-one-to-another/"
---

In JavaScript I needed to create a range of numbers from one number to another. Here is how:

## Example:

In this example, I will create a function called `range` that takes two arguments, `start` and `end`, and returns an array of numbers from the `start` number to the `end` number (inclusive). The code will include detailed comments to explain each step.

```
// This function takes two arguments, 'start' and 'end'.
// It returns an array of numbers from 'start' to 'end' (inclusive).
function range(start, end) {
  // Initialize an empty array to store the range of numbers.
  let result = [];

  // Use a for loop to iterate through the numbers from 'start' to 'end'.
  for (let i = start; i <= end; i++) {
    // Add the current number (i) to the 'result' array.
    result.push(i);
  }

  // Return the 'result' array containing the range of numbers.
  return result;
}

// Example usage:
// The function call range(1, 5) will return [1, 2, 3, 4, 5].
console.log(range(1, 5));
```

This code defines a `range` function that creates an array of numbers from the `start` value to the `end` value. The for loop iterates through the numbers, and the `result.push(i)` line adds each number to the array. Finally, the function returns the array of numbers.
