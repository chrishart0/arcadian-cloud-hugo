---
title: "Bash: Or in an until or while loop"
date: "2020-09-30"
categories: 
  - "nix"
cover:
  Image: "/images/tux.png"
author: "chart"
url: "/nix/2020/09/29/bash-or-in-an-until-or-while-loop/"
---

## Problem

_How do you write a while or until loop in bash which uses **or** in the condition?_

## Solution

The example is going to run until $a is A, $b is B, or $c is C

```
#Example until loop waiting for one of the 3 conditions to evaluate to false. This loop will only run through once.
a='' 
until [[ "$a" == 'A' || "$b" == 'B' || "$c" == 'C' ]]; do
   echo "waiting..."
   echo "\$a = $a"
   sleep 2
   a='A'
done
```
