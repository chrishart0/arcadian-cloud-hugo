---
title: "What are automated evaluations, into to LLM evals"
date: "2024-06-26"
categories: 
  - "Gen AI"
tags: 
  - "llm"
  - "AI"
  - "Gen AI"
  - "evals"
  - "Automated evaluations"
cover:
  Image: "/images/gen-ai/cover-images/what-are-automated-evaluations-llms.webp"
author: "chart"
url: "into-to-LLM-evals"
---

Automated testing is critical to delivering high quality, stable software. *Evals* are the new paradigm on testing which allow us to automatically validate the functionality of LLM based applications. 

## Why do we need a new paradigm of automated testing for LLMs?

Automated tests validate that, given some setup, the same output is always achieved. This doesn't work for LLM based applications, since give one input, you should get a different output each time. 

### Example Scenario 1

Imagine you have a RAG based chat application which takes user input and searches over travel destinations. If the user asks for "Hotels in Paris, France" you might have 1 specific record you want the LLM to source from. You then want the LLM to create an answer using that data as it's source. How do you write an automated test for this?

* You CAN test that the 1 document you expect to get cited does get cited
* You CANNOT write a test that says `assert response.message == "blah blah blah about Paris."` because the exact message returned by an LLM will vary every time



## Notes from: Building and Evaluating Advanced RAG
link: https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/lesson/

### Introduction

