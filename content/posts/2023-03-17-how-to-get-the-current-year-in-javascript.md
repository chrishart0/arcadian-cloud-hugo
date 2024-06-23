---
title: "How to Get the Current Year in JavaScript"
date: "2023-03-17"
categories: 
  - "code"
tags: 
  - "javascript"
author: "chart"
url: "/code/2023/03/17/how-to-get-the-current-year-in-javascript/"
---

## Step 1: Create a new Date object

The first step to get the current year in JavaScript is to create a new `Date` object representing the current date and time. To do this, simply use the `Date` constructor without any arguments:

```
const currentDate = new Date();
```

## Step 2: Extract the current year

Once you have a `Date` object representing the current date, you can use the `getFullYear()` method to extract the current year. This method returns a four-digit year (e.g., 2023) and is called on the `Date` object:

```
const currentYear = currentDate.getFullYear();
```

## Step 3: Display the current year

Now that you have the current year stored in the `currentYear` variable, you can display it in any way you'd like. For instance, you can log it to the console using `console.log()`:

```
console.log(currentYear);
```

## Full script for getting the current year in JavaScript:

Here's the complete code snippet to get the current year in JavaScript:

```
// Create a new Date object representing the current date and time.
const currentDate = new Date();

// Extract the current year from the Date object.
const currentYear = currentDate.getFullYear();

// Log the current year to the console.
console.log(currentYear);
```

## Conclusion:

Obtaining the current year in JavaScript is a straightforward process using the `Date` object and its `getFullYear()` method. This simple yet powerful functionality can be beneficial for a variety of use cases, such as displaying copyright information or generating dynamic content based on the current year. With this knowledge in hand, you're now equipped to work with dates and times more effectively in your JavaScript projects.
